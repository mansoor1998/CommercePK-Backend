import express, { Router, Response, Request } from "express";
import { Product, SKU, SKUValue, Variant } from "../database/entity";
import ProjectDependencies from "../dependencies";
import { validator } from "../middleware/validator";
import { IProduct, ISKUVariant, productSchema } from "../validator/product.validator";

const ProductController = (dependencies: ProjectDependencies): Router => {
    const router: Router = express.Router();

    const { productRepository } = dependencies.databaseService;

    router.get('/getall', async (req: Request, res: Response) => {
        res.send(await productRepository.getAll());
    });

    router.post('/create', validator(productSchema), async (req: Request, res: Response) => {
        const body = req.body;
        const skuVariants = body.skuVariants as ISKUVariant[];
        body.skuVariants = undefined;
        delete body.skuVariants;
        const productDto = body as IProduct;
        let skuValuesTemp: {
            optionName: string,
            variantName: string,
            skuNumber: string,
        }[] | undefined;

        const productItem = new Product();
        Object.assign(productItem, productDto);


        if(skuVariants){
            // do calculations for skuvariants.
            productItem.SKUs = [];
            for(let i = 0; i < skuVariants.length; i++){
                const sku = new SKU();
                const { variants, ...rest } = skuVariants[i]
                Object.assign(sku, rest);
                productItem.SKUs.push(sku);
            }

            // nest variantoptions object in productvariant object
            let variants = skuVariants.map((sku, i) => sku.variants.map(option => option.optionName));
            // transpose callback function of the matrix. 
            const transpose = (list: any) => {
                let longestArr = list.sort( (a:any,b:any) => b.length - a.length  )[0];
                return longestArr.map( (arr:any, i:any) =>  list.filter((b:any) => b.length > i).map((x:any) => x[i]) ) 
            }
            variants =  transpose(variants) // variants[0].map((col, i) => variants.map(row => row[i]))
            .map( (item: any) => Array.from(new Set(item)) )
            .map((variants:any) => variants.filter((name: any) => name ? true : false));
            
            variants = variants.filter(x => x.length > 0);
            if(!variants.every( x => x.length === productDto.variants?.length )) return res.status(404).send({ "message": [ 'Bad input' ] });
            productDto.variants.forEach((variant, index) => {
                variant.options = variants[index].map(option => ({ name: option, description: '' }));
            });

             // add variant options in skuVariants.
             const productVariants = productDto.variants.map(x => x.name);
             skuVariants.forEach(sku => {
                 //@ts-ignore
                 sku.variants.forEach((v, i) => v.variantName = productVariants[i])
             });

             // passing from body to actual object.
            productItem.variants = [];
            for(let i = 0; i < productDto.variants.length; i++){
                let variant: Variant = new Variant();
                Object.assign(variant, productDto.variants[i]);
                // coppier(product.variants[i], variant);
                productItem.variants.push(variant);
            }

            // temp sku valeues names stored in a variable
            skuValuesTemp = skuVariants.map(sku => {
                let values:any[] = [];
                
                let variants = sku.variants.map(v => ({
                    optionName: v.optionName,
                    //@ts-ignore
                    variantName: v.variantName
                })).flat();

                for(let i = 0; i  < variants.length; i++){
                    values.push({
                        optionName: variants[i].optionName,
                        variantName: variants[i].variantName,
                        skuNumber: sku.skuNumber
                    });
                }

                return values;
            }).flat();

        } else {
            productItem.SKUs = [];
            const sku = new SKU();
            sku.skuNumber = productDto.skuNumber;
            sku.unitPrice = productDto.unitPrice;
            sku.unitCost = productDto.unitCost;
            // sku.trackInventory = productDto.trackInventory;
            productItem.SKUs.push(sku);
        }

        const result = await productRepository.create(productItem, skuValuesTemp);
        res.send({'id': result});
    });

    return router;
}


export default ProductController;