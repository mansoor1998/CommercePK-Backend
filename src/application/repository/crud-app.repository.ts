import { Connection } from "typeorm";
import { IEntity } from "../../database/utilities/entity/full-audit-entity";


export class CrudAppRepository<T extends IEntity> {

    constructor(protected connection: Connection, private entityClass: new (...args: any[]) => T){}

    public async getAll(): Promise<T[]>{
        return await this.connection.getRepository(this.entityClass).find();
    }

    public async getById(id: string): Promise<T | undefined> {
        return await this.connection.getRepository(this.entityClass).findOne(id);
    }
}