import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { FullAuditEntity, IEntity } from "../utilities/entity/full-audit-entity";
import { Variant } from "./variant";
import { v4 as uuid } from 'uuid';

@Entity("Option")
export class Option implements IEntity {
    @PrimaryColumn({ type: "uuid" })
    public id: string;
   
    @Column({ type: "varchar", length: 256 })
    public name: string;
    
    @Column({ type: "text" })
    public description: string;
   
    // does not have a FK relation.
    @Column({ type: "uuid" })
    public productId: string;

    // associated with the table as variantId
    @ManyToOne(() => Variant)
    @JoinColumn({ name: 'variantId' })
    public variant: Variant;

    @Column()
    public variantId: string;

    @BeforeInsert()
    addId(){
        this.id = uuid();
    }
}   