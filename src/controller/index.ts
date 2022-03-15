import express, { Router } from "express";
import { CrudAppRepository } from "../application/repository/crud-app.repository";
import { Option, Product, SKU } from "../database/entity";
import ProjectDependencies from "../dependencies";
import { Role } from "../dependencies/iauth-service";
import { authorize } from "../middleware/authorize";
import CrudAppController from "./crud-app.controller";
import InventoryController from "./inventory.controller";
import OrderController from "./order.controller";
import ProductController from "./product.controller";
import UserController from "./user.controller";

const apiRouter = (dependencies: ProjectDependencies): Router => {
    const router: Router = express.Router();

    const dbService = dependencies.databaseService;

    router.use('/product', authorize() , ProductController( dependencies ));
    router.use('/inventory', authorize([Role.admin]), InventoryController( dependencies ));
    router.use('/user', UserController(dependencies));
    router.use('/order', authorize([Role.admin, Role.customer]) ,OrderController(dependencies));

    // dynamic routers.
    router.use('/options', CrudAppController( dbService.getCrudAppRepository<Option>(Option) ));

    return router;
}

export default apiRouter;