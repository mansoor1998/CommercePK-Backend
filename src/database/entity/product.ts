import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { FullAuditEntity, IEntity } from "../utilities/entity/full-audit-entity";
import { Category } from "./category";
import { SKU } from "./sku";
import { Variant } from "./variant";
import { v4 as uuid } from 'uuid';
import { SKUValue } from ".";


@Entity("Product")
export class Product extends FullAuditEntity implements IEntity {
   
    @Column({ type: "varchar" })
    public title: string;
    
    @Column({ type: "varchar", nullable: true })
    public code: string;
    
    @Column({ type: "varchar", nullable: true })
    public keywords: string;
    
    @Column({ type: "text", nullable: true })
    public description: string;
    
    @Column({ type: "decimal" })
    public unitCost: number;

    @Column({ type: "decimal" })
    public unitPrice: number;

    @Column({ type: "decimal", nullable: true })
    public weight: number;

    @Column({ type: "varchar", nullable: true })
    public smallImage: string;

    @Column({ type: "varchar", nullable: true })
    public mediumImage: string;

    @Column({ type: "varchar", nullable: true })
    public largeImage: string;

    // @Column({ type: "uuid", nullable: false })
    @ManyToOne(() => Category, { nullable: true })
    public primaryCategory: Category;

    @Column({ type: "boolean" })
    public hasVariant: boolean;

    @Column({ type: "varchar" })
    public status: string;

    // association that are not the part of the DB table.
    @OneToMany(() => Variant, variant => variant.product)
    public variants: Variant[];

    @OneToMany(() => SKU, sku => sku.product)
    public SKUs: SKU[];

    // @OneToMany(() => SKUValue, sku => sku.productId)
    // public SKValues: SKUValue[];

    @BeforeInsert()
    addId(){
        this.id = uuid();
        this.isDeleted = false;
    }
}