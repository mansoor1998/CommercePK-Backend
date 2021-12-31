import { BeforeInsert, Column } from "typeorm";

export abstract class DeleteEntity {

    @Column({type: "uuid", nullable: true})
    public deleteorUserId: string;

    @Column({type: "timestamp", nullable: true})
    public deletionTime: Date;

    @Column({type: "boolean", nullable: true})
    public isDeleted: boolean;
}