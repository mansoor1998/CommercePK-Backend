import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import { UserRecord } from "firebase-admin/lib/auth/user-record";


export enum Role {
    admin = 'admin',
    customer = 'customer',
    report = 'report'
}


export interface IAuthService {
    grantRole(uid: string, role: Role): Promise<any>;
    grantRoles(uid: string, roles: Role[]): Promise<any>;
    getPayload(token: string): Promise<any>;
    verifyAndDecodeToken(token: string): Promise<DecodedIdToken>;
    createUser(email: string, password: string): Promise<UserRecord>
}