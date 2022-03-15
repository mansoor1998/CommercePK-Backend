import { Connection, getManager } from "typeorm";
import { Product, SKU, Variant, Option, SKUValue } from "../../database/entity";
import { Cart } from "../../database/entity/cart";
import { CrudAppRepository } from "./crud-app.repository";
import { v4 as uuid } from 'uuid';


export default class OrderRepository {

    constructor(private connection: Connection){
    }

    public async addToCart(cart: Cart, cartId: string | undefined = undefined){


        const cartModel: Cart | undefined = await this.connection
            .getRepository(Cart)
            .findOne(cartId);

        // if the cart row for the user does not exist then create it.
        if ( !cartModel ) {
            cart.id = uuid();
            return await this.connection
            .createQueryBuilder()
            .insert()
            .into(Cart)
            .values(cart)
            .execute();
        }

        // update the value of the quantity.
        return await this.connection
            .createQueryBuilder()
            .update(Cart)
            .set( { quantity: cart.quantity } )
            .where ("id = :id", { id: cartModel.id })
            .execute();
    }

    public async updateCart(id: string, quantity: number){
        return await this.connection
        .createQueryBuilder()
        .update(Cart)
        .set({ quantity: quantity })
        .where("id = :id", { id: id })
        .andWhere(":quantity > 0", { quantity: quantity })
        .execute();
    }

    public async deleteCart(id: string){
        await this.connection
            .createQueryBuilder()
            .delete()
            .from(Cart)
            .where("id = :id", {id: id})
            .execute();
    }
}