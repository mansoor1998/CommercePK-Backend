import express, { Request, Response, Router } from "express";
import { expression } from "joi"
import { Product, SKUValue } from "../database/entity";
import ProjectDependencies from "../dependencies";

const InventoryController = (dependencies: ProjectDependencies): Router => {
    const router: Router = express.Router();
    const { inventoryRepository } = dependencies.databaseService;

    router.get('/getall', async (req: Request, res: Response) => {
        const products: Product[] = await inventoryRepository.getAll();
        let productsDto: any = [];
        products.forEach(p => {
            // const dto: any = {};
            productsDto.push({
                id: p?.id,
                title: p?.title,
                skus: p?.SKUs.map(sku => {
                    const result = sku.skuValues.map((value: SKUValue) => value.option?.name)
                    return {
                        id: sku?.id,
                        options: result 
                    }
                })
            })
        })

        res.send(productsDto);
    });

    router.patch('/adjust-quantity', (req: Request, res: Response) => {
        const skuId: string = req.query?.skuId as string;
        const quantity: number = req.body?.quantity;
        const adjustType: string = req.body?.adjustType;

        switch(adjustType){
            case 'ADD':
                inventoryRepository.addQuantity(skuId, quantity); 
                break;
            case 'SET':
                inventoryRepository.setQuantity(skuId, quantity); 
                break;
            default:
                res.status(404).send({ message: "Bad Input" });
        }

        res.send();

    });

    return router;
}

export default InventoryController;