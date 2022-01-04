import express, { Router } from "express";
import { CrudAppRepository } from "../application/repository/crud-app.repository";
import { Option, Product, SKU } from "../database/entity";
import ProjectDependencies from "../dependencies";
import CrudAppController from "./crud-app.controller";
import InventoryController from "./inventory.controller";
import ProductController from "./product.controller";

const apiRouter = (dependencies: ProjectDependencies): Router => {
    const router: Router = express.Router();

    const dbService = dependencies.databaseService;

    router.use('/product', ProductController( dependencies ));
    router.use('/inventory', InventoryController( dependencies ));
    router.use('/options', CrudAppController( dbService.getCrudAppRepository<Option>(Option) ));


    return router;
}

export default apiRouter;