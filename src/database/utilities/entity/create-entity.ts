import { Column } from "typeorm";

export abstract class CreateEntity {

    @Column({type: "uuid", nullable: true})
    public creatorUserId: string;

    @Column({type: "timestamp", nullable: true})
    public creationTime: Date;
}