import ProductRepository from '../application/repository/product.repository';
import DatabaseService from './database-service';

export default class ProjectDependencies {

    public static dependencies: ProjectDependencies;
    public databaseService: DatabaseService;

    constructor(){
        this.databaseService = new DatabaseService();
    }

    /**
     * return the ProjectDependecies Instance.
     * @returns {ProjectDependencies} return an instance of ProjectDependencies.
    */
    static getInstance() {
        if(ProjectDependencies.dependencies == null) { ProjectDependencies.dependencies = new ProjectDependencies(); }
        return ProjectDependencies.dependencies;
    }
}