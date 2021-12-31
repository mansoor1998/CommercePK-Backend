import { BeforeInsert, Column } from "typeorm";

export abstract class UpdateEntity {

    @Column({type: "uuid", nullable: true})
    public updaterUserId: string;

    @Column({type: "timestamp", nullable: true})
    public updationTime: Date;
}