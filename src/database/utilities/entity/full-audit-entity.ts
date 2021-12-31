import { Column, PrimaryColumn, } from "typeorm";

export interface IEntity {
    id: string;    
}

export abstract class FullAuditEntity {

    @PrimaryColumn({type: "uuid"})
    public id: string;

    @Column({type: "uuid", select: false, nullable: true})
    public creatorUserId: string;

    @Column({type: "timestamp", select: false, nullable: true})
    public creationTime: Date;
    
    @Column({type: "uuid", select: false, nullable: true})
    public updaterUserId: string;

    @Column({type: "timestamp", select: false, nullable: true})
    public updationTime: Date;

    @Column({type: "uuid", select: false, nullable: true})
    public deleteorUserId: string;

    @Column({type: "timestamp", select: false, nullable: true})
    public deletionTime: Date;

    @Column({type: "boolean", select: false})
    public isDeleted: boolean;
}