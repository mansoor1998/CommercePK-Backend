import express, { Response, Router } from "express";
import { Cart } from "../database/entity/cart";
import ProjectDependencies from "../dependencies";
import { Role } from "../dependencies/iauth-service";
import { UserRequest } from "../interface/user-request.interface";
import { authorize } from "../middleware/authorize";
import { validator } from "../middleware/validator";
import { cartSchema, ICart } from "../validator/order.validator";

const OrderController = (dependencies: ProjectDependencies): Router => {
    const router: Router = express.Router();

    const { productRepository, orderRepository } = dependencies.databaseService;
    
    router.post('/add-cart', validator(cartSchema), async (req: UserRequest, res: Response) => {
        const { cartId: id } = req.query;
        const cart: Cart = req.body;
        const sku = await productRepository.getBySkuId(cart?.skuId);
        if(sku?.inventoryLevel != undefined &&  cart.quantity >= sku?.inventoryLevel) return res.send({
            message: "cant set the quantity"
        });
        cart.userId = (req.user?.uid) ? req.user?.uid : "";
        orderRepository.addToCart(cart, id as string);
        res.send();
    });

    return router;
}

export default OrderController;