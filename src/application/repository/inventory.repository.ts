import { Connection, getManager } from "typeorm";
import { Product, SKU, Variant, Option, SKUValue } from "../../database/entity";
import { CrudAppRepository } from "./crud-app.repository";


export default class InventoryRepository {

    constructor(private connection: Connection){
    }

    public async getAll(): Promise<Product[]> {
        return await this.connection.createQueryBuilder(Product, "p")
        .leftJoinAndMapMany("p.SKUs", SKU, "s", "p.id = s.productId")
        .leftJoinAndMapMany("s.skuValues", SKUValue, "sv", "s.id = sv.sKUId")
        .leftJoinAndMapOne("sv.option", Option, "o", "o.id = sv.optionId")
        .select([ "p.id", "p.title", "s.id" , "sv.variantId", "o.name"])
        // .leftJoinAndMapMany("sv.Option", Option, "o", "o.id = sv.optionId")
        // .leftJoinAndSelect(SKUValue, "s", "p.id = s.productId")
        // .leftJoinAndSelect(Option, "o", "o.id = s.optionId")
        // .select('p.id', 'id')
        // .addSelect('p.title', 'title')
        // .addSelect('o.name', 'name')
        // .addSelect('s."variantId"', 'variantId')np
        // .leftJoinAndSelect("skuValue.option", "option")
        .getMany();
    }

    public async addQuantity(id: string, quantity: number){
        const result = await this.connection
        .createQueryBuilder()
        .update(SKU)
        .set({ inventoryLevel: () => `"inventoryLevel" + ${quantity}` })
        .where("id = :id", { id: id })
        .andWhere("inventoryLevel + :quantity > 0", { quantity: quantity })
        .execute();

        console.log (result.affected);
    }

    public async setQuantity(id: string, quantity: number){
        if(quantity < 0)  throw new Error('Quantity level is less than zero');
        
        const result = await this.connection
        .createQueryBuilder()
        .update(SKU)
        .set({ inventoryLevel: quantity })
        .where("id = :id", { id: id })
        .andWhere(":quantity > 0", { quantity: quantity })
        .execute();
         
        console.log(result.affected);
    }   
}
