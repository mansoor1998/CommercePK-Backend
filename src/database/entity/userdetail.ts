import { Column, Entity, PrimaryColumn } from "typeorm";
import { IEntity } from "../utilities/entity/full-audit-entity";

@Entity("UserDetail")
export class UserDetail implements IEntity {

    @PrimaryColumn({ type: "uuid" })
    public id: string;

    @Column({ type: "varchar" })
    public address: string;
    
    @Column({ type: "varchar" })
    public city: string;
    
    @Column({ type: "varchar" })
    public postalCode: string;
    
    @Column({ type: "varchar" })
    public country: string;
    
    @Column({ type: "varchar" })
    public mobile: string;
}