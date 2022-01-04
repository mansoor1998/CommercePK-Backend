
import { Connection, createConnection } from "typeorm";
import { CrudAppRepository } from "../application/repository/crud-app.repository";
import InventoryRepository from "../application/repository/inventory.repository";
import ProductRepository from "../application/repository/product.repository";
import { IEntity } from "../database/utilities/entity/full-audit-entity";


export default class DatabaseService {
    // for short term purposes.
    public connection: Connection;
    public productRepository: ProductRepository;
    public inventoryRepository: InventoryRepository;
    constructor(){
        // // Creating repositories inside here
        // this.homeRepository = new HomeRepository();
        // this.userRepository = new UserRepository();
        // this.productRepository = new ProductRepository();
        // this.inventoryRepository = new InventoryRepository();
    }

    /**
     * Generic function for returing a repository based on the database model provided
     * @returns {CrudAppRepository}
     */
    public getCrudAppRepository<T extends IEntity>(entity: new (...args: any) => T, attributes = []): CrudAppRepository<T> {
        return new CrudAppRepository(this.connection, entity);
    }

    public createRepositoriesInstance(): void{
        this.productRepository = new ProductRepository(this.connection);
        this.inventoryRepository = new InventoryRepository(this.connection);
    }


    /**
     * Initiazlize the database server.
     * @returns {Promise<void>} returning a promise of type boolean.
    */
    public async initDatabase(): Promise<Connection>{
        try{
            this.connection = await createConnection();
            this.createRepositoriesInstance();
            return Promise.resolve(this.connection);
        }catch(e){
            return Promise.reject(e);
        }
    }
}
