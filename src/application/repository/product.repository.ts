import { Connection, getManager } from "typeorm";
import { Product, SKU, Variant, Option, SKUValue } from "../../database/entity";
import { CrudAppRepository } from "./crud-app.repository";


export default class ProductRepository extends CrudAppRepository<Product> {

    constructor(connection: Connection){
        super(connection, Product);
    }

    public override async getAll(): Promise<Product[]> {
        return await this.connection.getRepository(Product).find();
    }

    public async create(product: Product, skuValuesTemp: { optionName: string, variantName: string, skuNumber: string }[] | undefined): Promise<string> {
        product.isDeleted = false;
        product.hasVariant = (product.variants && product.variants.length > 0) ? true: false;
        await getManager().transaction(async transactionManager => {
            await transactionManager.save(product);
            product.SKUs?.forEach(x => x.productId = product.id);
            await transactionManager.save(product.SKUs.flat());

            // 
            if(!product.variants || product?.variants?.length <= 0) return;

            product.variants.forEach(x => x.productId = product.id);
            await transactionManager.save(product.variants);

            product.variants.forEach(variant => {
                variant.options.forEach(option => {
                    option.variantId = variant.id;
                    option.productId = product.id;
                })
            })
            const options = product.variants.map(x => x.options).flat().map(data => {
                const option = new Option();
                Object.assign(option, data);
                return option;
            });
            await transactionManager.save(options);

            if(skuValuesTemp){
                const skuValues: SKUValue[] = [];
                for(let i = 0; i < skuValuesTemp?.length; i++){
                    let variantName = skuValuesTemp[i].variantName;
                    let optionName = skuValuesTemp[i].optionName;
                    let skuNumber = skuValuesTemp[i].skuNumber;

                    let variant = product.variants.find(variant => variantName === variant.name);
                    
                    // all the assciated ids in skuvalue.
                    let variantId = variant?.id;
                    let optionId = options.find (option => optionName === option.name && option.variantId == variantId)?.id;
                    let sKUId = product.SKUs.find(sku => sku.skuNumber === skuNumber)?.id;
                    let productId = product.id;

                    // store the associated values in sku value.
                    let skuValue = new SKUValue();
                    skuValue.variantId = (variantId) ? variantId : ''
                    skuValue.optionId = (optionId) ? optionId: '';
                    skuValue.sKUId = (sKUId) ? sKUId : '';
                    skuValue.productId = productId;
                    skuValues.push(skuValue);
                }
                await transactionManager.save(skuValues);
            }

        });        
       

        return product.id;
    }
}