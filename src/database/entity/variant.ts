
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToMany, RelationId } from "typeorm";
import { FullAuditEntity, IEntity } from "../utilities/entity/full-audit-entity";
import { Option } from "./option";
import { Product } from "./product";
import { v4 as uuid } from 'uuid';

@Entity("Variant")
export class Variant extends FullAuditEntity implements IEntity {
   
    @Column({ type: "varchar", length: 256 })
    public name: string;
    
    @Column({ type: "text", nullable: true })
    public description: string;
    // this is productId
    @ManyToOne(() => Product, { cascade: true })
    @JoinColumn({ name: 'productId' })
    public product: Product;

    @Column()
    public productId: string;

    // association that is not part of the table.
    @OneToMany(() => Option, option => option.variant)
    public options: Option[];

    @BeforeInsert()
    addId(){
        this.id = uuid();
        this.isDeleted = false;
    }
}