import {Entity, Column, PrimaryColumn, BeforeInsert, ChildEntity, BeforeUpdate, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import { v4 as uuid } from 'uuid';
import { DeleteEntity } from "../utilities/entity/delete-entity";
import { FullAuditEntity, IEntity } from "../utilities/entity/full-audit-entity";
import { UserDetail } from "./userdetail";


@Entity("User")
export class User extends FullAuditEntity implements IEntity {

    @Column({ type: "varchar", length: 256 })
    public username: string;

    @Column({type: "varchar", length: 256})
    public email: string;

    @Column({type: "varchar", length: 256})
    public password: string;

    @Column({type: "boolean"})
    public isActive: boolean;

    @Column({type: "varchar"})
    public status: string;

    @Column({type: "varchar"})
    public firstName: string;

    @Column({type: "varchar"})
    public lastName: string;

    @OneToOne( () => UserDetail )
    @JoinColumn()
    public userDetail: UserDetail;

    @BeforeInsert()
    addId(){
        this.id = uuid();
    }
}
