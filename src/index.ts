import "reflect-metadata";
import express, {Express} from "express";
import { Option, Product, Variant } from "./database/entity";

import ProjectDependencies from "./dependencies";
import { FullAuditEntity } from "./database/utilities/entity/full-audit-entity";
import apiRouter from "./controller";
import { Connection } from "typeorm";


import admin, { auth } from 'firebase-admin';
import { Role } from "./dependencies/iauth-service";



// frontend firebase auth
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCr79H3sUsDpD72-2ycOMfWkrXE-Gz_ecA",
//   authDomain: "commercepk-1bd1e.firebaseapp.com",
//   databaseURL: "https://commercepk-1bd1e-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "commercepk-1bd1e",
//   storageBucket: "commercepk-1bd1e.appspot.com",
//   messagingSenderId: "240277035643",
//   appId: "1:240277035643:web:4413e73f32a164410de0de",
//   measurementId: "G-PZZXP9VC28"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
if(process.env.NODE_ENV === 'production') console.log = function(){}

declare namespace Express {
    export interface Request {
       [key: string]: any;
    }
}



const PORT = process.env?.PORT || 3000;
const app = express();


ProjectDependencies.getInstance().databaseService.initDatabase().then((connection: Connection) => {

    app.use(express.json());
    // app.use('/api/v1', apiRouter(ProjectDependencies.getInstance()));
    // load all the api routes.
    app.use('/api/v1', apiRouter(ProjectDependencies.getInstance()));

    app.get('/', async (req, res) => {
        const { connection } = ProjectDependencies.getInstance().databaseService;

        const result = await connection
            .createQueryBuilder(Product, "product")
            .leftJoinAndSelect("product.variants", "variants")
            .leftJoinAndSelect("variants.options", "options")
            .where("variants.name = :firstName", { firstName: "Color" })
            .orWhere("variants.name = :secondName", { secondName: "Material" })
            // .orWhere()
            .getMany();

        res.send(result);
    });

    if(process.env.NODE_ENV === 'development') app.get('/add-firebase-role', (req, res) => {
        const {id} = req.query;
        const {name} = req.query;
        try{
            ProjectDependencies.getInstance().authService
            .grantRole(id as string , (name == Role.customer) ? Role.customer : Role.admin);
        }catch(e) {
            res.status(500).send("error bruh!");
        }
        res.send("done");
    });

    // app.get('/get-user', async (req, res) => {
    //     admin.auth().createCustomToken('some-user').then(token => {
    //         res.send(token);
    //     });
    // });

    // app.get('/get-admin', async (req, res) => {
    //     admin.auth()
    // });

    // app.get('/admin', (req, res) => {
    //     res.send("this is only allowed for admin");
    // });
    
    // app.get('/others', (req, res) => {
    //     res.send('any signed in user can use this');
    // });

    app.listen(PORT, () => { console.log(`Application started on port ${PORT}`); });

}).catch(e => console.log('database error: ', e));

// createConnection().then(async connection => {
//     // app.listen(3000, () => { console.log('server started in port 3000'); });    
//     let result = await connection.getRepository(Product).createQueryBuilder("Product")
//     console.log (result);
// }).catch(e => console.log(e));
