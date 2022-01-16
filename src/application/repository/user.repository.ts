import { Connection, getManager } from "typeorm";
import { Product, SKU, Variant, Option, SKUValue, User } from "../../database/entity";
import { CrudAppRepository } from "./crud-app.repository";


export default class UserRepository {
    constructor(private connection: Connection) {
    }

    public async createUser(user: User): Promise<any>{
        await this.connection
            .createQueryBuilder()
            .insert()
            .into(User)
            .values(user)
            .execute();
    }
}