import {Entity, Column, PrimaryColumn, BeforeInsert, ChildEntity, BeforeUpdate, PrimaryGeneratedColumn, OneToOne, JoinColumn, JoinTable, ManyToMany} from "typeorm";
import { v4 as uuid } from 'uuid';
import { IEntity } from "../utilities/entity/full-audit-entity";
import { UserDetail } from "./userdetail";


@Entity("User")
export class User implements IEntity {

    @PrimaryColumn({type: "varchar"})
    public id: string;

    @Column({ type: "varchar", length: 256, nullable: true })
    public username: string;

    @Column({type: "varchar", length: 256})
    public email: string;
    
    @Column({type: "boolean", nullable: true})
    public isActive: boolean;

    @Column({type: "varchar", nullable: true})
    public status: string;

    @Column({type: "varchar", nullable: true})
    public firstName: string;

    @Column({type: "varchar", nullable: true})
    public lastName: string;

    @Column({type: "varchar", select: false, nullable: true})
    public creatorUserId: string;

    @Column({type: "timestamp", select: false, nullable: true})
    public creationTime: Date;
    
    @Column({type: "varchar", select: false, nullable: true})
    public updaterUserId: string;

    @Column({type: "timestamp", select: false, nullable: true})
    public updationTime: Date;

    @Column({type: "varchar", select: false, nullable: true})
    public deleteorUserId: string;

    @Column({type: "timestamp", select: false, nullable: true})
    public deletionTime: Date;

    @Column({type: "boolean", select: false})
    public isDeleted: boolean;

    @OneToOne( () => UserDetail )
    @JoinColumn()
    public userDetail: UserDetail;

    @BeforeInsert()
    addId(){
        // this.id = uuid();
        this.isDeleted = false;
    }
}
