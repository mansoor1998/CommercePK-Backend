
import { getAuth, onAuthStateChanged } from "firebase/auth";
import admin, { auth } from 'firebase-admin';
import { Role } from "./iauth-service";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import { UserRecord } from "firebase-admin/lib/auth/user-record";

const serviceAccount = require('../../serviceAccount.json'); 


export default class FirebaseService {
    constructor() {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount as {
                projectId?: string;
                clientEmail?: string;
                privateKey?: string;
            }),
            databaseURL: "https://commercepk-1bd1e-default-rtdb.europe-west1.firebasedatabase.app"
        });
    }

    public async grantRole(uid: string, role: Role){
        await this.grantRoles(uid, [role]);
    }

    public async grantRoles(uid: string, roles: Role[]){
        if ( roles.filter(r => Object.values(Role)?.includes(r)).length !== roles.length )
            throw new Error('could not assign roles');
        const user = await admin.auth().getUser(uid);
        roles = roles.filter((r) => !(user.customClaims && user.customClaims[r as string] === true))

        const newRoles: any = {};
        roles.forEach(x => {
            newRoles[x] = true;
        });

        return await admin.auth().setCustomUserClaims(user.uid, newRoles);
    }

    public async getPayload(token: string){
        const result = await admin.auth().verifyIdToken(token).then((token) => {
            // const uid = token.uid;
            if(!token.email_verified){
                return {
                    tokenBody: token,
                    message: "verify your email brother"                    
                }
            //    return res.status(401).send({message: "verify your email brother otherwise you cant access the app brother.", body: token});
            }
            return {
                tokenBody: token
            }
        });

        return result;
    }

    public async verifyAndDecodeToken(token: string): Promise<DecodedIdToken>{
        try{
            const result =  await admin.auth().verifyIdToken(token);
            return result;
        } catch (e) {
            throw e;
        }
    }

    public async createUser(email: string, password: string): Promise<UserRecord> {
        return await admin.auth().createUser({
            email: email,
            password: password
        }).then(async (userRecord) => {
            const id = userRecord.uid;
            const claims: any = {};
            claims[Role.customer as string] = true;
            await admin.auth().setCustomUserClaims(id, claims);
            return userRecord;
        });
    }

    // public authenticate(email: string, password: string) {
    //     admin.auth().
    // }
}