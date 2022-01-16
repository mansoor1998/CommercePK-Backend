import { BeforeInsert, Column, PrimaryColumn, } from "typeorm";

export interface IEntity {
    id: string;    
}

export abstract class FullAuditEntity {

    @PrimaryColumn({type: "uuid"})
    public id: string;

    @Column({type: "varchar", select: false, nullable: true})
    public creatorUserId: string | null;

    @Column({type: "timestamp", select: false, nullable: true})
    public creationTime: Date;
    
    @Column({type: "varchar", select: false, nullable: true})
    public updaterUserId: string | null;

    @Column({type: "timestamp", select: false, nullable: true})
    public updationTime: Date;

    @Column({type: "varchar", select: false, nullable: true})
    public deleteorUserId: string | null;

    @Column({type: "timestamp", select: false, nullable: true})
    public deletionTime: Date;

    @Column({type: "boolean", select: false})
    public isDeleted: boolean;

    @BeforeInsert()
    onInsert() {
        this.isDeleted = false;
    }
}