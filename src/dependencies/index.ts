import DatabaseService from './database-service';
import FirebaseService from './firebase-service';
import { IAuthService } from './iauth-service';

export default class ProjectDependencies {

    public static dependencies: ProjectDependencies;
    public databaseService: DatabaseService;
    public authService: IAuthService;
    constructor(){
        this.databaseService = new DatabaseService();
        this.authService = new FirebaseService();

        // set all roles for the super admin user. (if the user is not created we set all the roles.)
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