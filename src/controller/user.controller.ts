import express, { Router, Request, Response } from "express";
import { auth } from "firebase-admin";
import { User } from "../database/entity";
import ProjectDependencies from "../dependencies";
import { Role } from "../dependencies/iauth-service";
import { validator } from "../middleware/validator";
import { IUserSignup, userSignupSchema } from "../validator/user.validator";
import { getAuth, updateProfile } from "firebase/auth";
import { authorize } from "../middleware/authorize";


// for login(autehntication), and reset password, email verfication client is going to get the autority to call firebase server.
// for user creation updation client has to use custom made backend which is going to use firebase server to make changes.

const UserController = (dependencies: ProjectDependencies): Router => {
    const { authService } = dependencies;
    const { userRepository } = dependencies.databaseService;
    const router: Router = express.Router();

    router.get('/all-users', authorize([Role.admin]) , (req, res) => {
      res.send('get all users');  
    });

    router.post('/grant-controller', authorize([Role.admin]), (req, res) => {
       const id = '1234';
       // grant controller to the user. 
    });

    // router.post('/authenticate', async (req, res) => {
    //    admin.auth().setCustomUserClaims 
    // });

    // creating the user.
    router.post('/signup', validator(userSignupSchema), async (req, res) => {
        const { email, password } = req.body as IUserSignup;
        const user = new User();
        
        // revisions might need to be made.
        authService.createUser(email, password).then(async (userRecord) => {
            user.id = userRecord.uid;
            user.email = email;
            user.isDeleted = false;
            await userRepository.createUser(user);
            res.send({id: userRecord.uid});
        }).catch((e) => console.log('firebase create user error', e));
    });

    router.post('/create', async (req, res) => {
        const { email, password } = req.body;
        if(!email || !password) return res.status(400).send('bad input');
        
        // const user = await admin.auth().createUser({
        //     email: email,
        //     password: password
        // });
       
        // res.send(user.uid);
    });

    router.put('/grant-roles', authorize([Role.admin]) , async (req, res) => {
        // const { email } = req.body;
        // const user = await admin.auth().getUserByEmail(email);
        // if(user.customClaims && user.customClaims.customer == true) return;

        // admin.auth().setCustomUserClaims(user.uid, {
        //     customer: true
        // });

        authService.grantRole('PxNdLSYlbiUalgxEx5HB29lWD2F3', Role.customer).then((x) => {
            res.send(x);
        }).catch((err) => {
            console.log(err);
            res.send({
                message: "Grant Role Error",
            });
        });        
    })

    // test function to check if the payload works.
    router.post('/verify', async (req, res) => {
       res.send(await authService.getPayload(req.body.idToken));
    });

    router.post('/revoke-token', async (req, res) => {
        // const uid = req.body.uid;
        // const getAuth = admin.auth();
        // await getAuth.revokeRefreshTokens(uid);
        // const userRecord = await getAuth.getUser(uid);
        // res.send(new Date(userRecord.tokensValidAfterTime as string).getTime() / 1000) ;
    });
    
    
    return router;
}

export default UserController;