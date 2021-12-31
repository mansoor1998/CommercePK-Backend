import "reflect-metadata";
import express, {Express} from "express";
import { Option, Product, Variant } from "./database/entity";

import ProjectDependencies from "./dependencies";
import { FullAuditEntity } from "./database/utilities/entity/full-audit-entity";
import apiRouter from "./controller";
import { Connection } from "typeorm";

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

    app.listen(PORT, () => { console.log(`Application started on port ${PORT}`); });

}).catch(e => console.log('database error: ', e));

// createConnection().then(async connection => {
//     // app.listen(3000, () => { console.log('server started in port 3000'); });    
//     let result = await connection.getRepository(Product).createQueryBuilder("Product")
//     console.log (result);
// }).catch(e => console.log(e));
