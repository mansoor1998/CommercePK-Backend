import express, { Router } from "express";
import { CrudAppRepository } from "../application/repository/crud-app.repository";
import { IEntity } from "../database/utilities/entity/full-audit-entity";


const CrudAppController = <TEntity extends IEntity> (repository: CrudAppRepository<TEntity>): Router => {
    const router: Router = express.Router();

    router.get('/getall', async (req, res) => {
        try{
            const response = await repository.getAll();
            return res.send(response);
        }catch(e){
            // return res.send( new ReturnDto( null, { message: [ e.message ] } ));
        }
    });

    router.get('/getbyId', async (req, res) => {
        try{
            const id: string = req.query?.id ? req.query?.id as string : "";
            const response = await repository.getById(id);
            return res.send(response);
        }catch(e){
            // return res.send( new ReturnDto( null, { message: [ e.message ] } ));
        }
    });

    return router;
}


export default CrudAppController;