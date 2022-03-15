import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { FullAuditEntity, IEntity } from "../utilities/entity/full-audit-entity";
import { Category } from "./category";
import { SKU } from "./sku";
import { Variant } from "./variant";
import { v4 as uuid } from 'uuid';
import { SKUValue } from ".";
import { OrderItem } from "./order-item";
import { Payment } from "./payment";
import { OrderDelivery } from "./order-delivery";


@Entity("Order")
export class Order extends FullAuditEntity implements IEntity {
   
    @Column({ type: "varchar", nullable: true })
    public orderNumber: string;
    
    @Column({ type: "varchar", nullable: true })
    public userName: string;
    
    @Column({ type: "varchar", nullable: true })
    public trackingNumber: string;
    
    @Column({ type: "decimal", nullable: true })
    public subtotal: number;

    @Column({ type: "decimal", nullable: true })
    public total: string;
    
    @Column({ type: "decimal", nullable: true })
    public shipping: number;

    @Column({ type: "decimal", nullable: true })
    public tax: number;

    @Column({ type: "decimal", nullable: true })
    public weight: number;

    @Column({ type: "integer", nullable: true })
    public quantity: number;

    @Column({ type: "varchar", nullable: true })
    public status: string;

    @Column({ type: "varchar", nullable: true })
    public firstName: string;

    @Column({ type: "varchar", nullable: true })
    public lastName: string;

    @OneToMany(() => OrderItem, item => item.id)
    public orderItems: OrderItem;
    
    @BeforeInsert()
    addId(){
        this.id = uuid();
        this.isDeleted = false;
    }
}