import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { FullAuditEntity, IEntity } from "../utilities/entity/full-audit-entity";
import { Product } from "./product";
import { v4 as uuid } from 'uuid';
import { SKUValue } from ".";

@Entity("SKU")
export class SKU extends FullAuditEntity implements IEntity {
   
    @Column({ type: "varchar", nullable: true })
    public skuNumber: string;
    
    @Column({ type: "varchar", nullable: true })
    public skuName: string;
    
    @Column({ type: "varchar", nullable: true })
    public skuMessage: string;
    
    @Column({ type: "boolean" })
    public trackInventory: boolean;
    
    @Column({ type: "integer", nullable: true })
    public inventoryLevel: number;

    @Column({ type: "decimal", nullable: true })
    public unitCost: number;

    @Column({ type: "decimal", nullable: true })
    public unitPrice: number;

    @Column({ type: "varchar", nullable: true })
    public smallImage: string;

    @Column({ type: "varchar", nullable: true })
    public mediumImage: string;

    @Column({ type: "varchar", nullable: true })
    public largeImage: string;

    // defining the productId.
    @ManyToOne(() => Product)
    @JoinColumn({ name: 'productId' })
    public product: Product;

    @Column()
    public productId: string;


    // FK of this/these table[s] does not exist.
    @OneToMany(() => SKUValue, sku => sku.productId)
    public skuValues: SKUValue[];

    @BeforeInsert()
    addId(){
        this.id = uuid();
        this.isDeleted = false;
    }
}