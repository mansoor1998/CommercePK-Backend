import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { IEntity } from "../utilities/entity/full-audit-entity";
import { Order } from "./order";

@Entity("OrderDelivery")
export class OrderDelivery implements IEntity {
    @PrimaryColumn({ type: "uuid" })
    id: string;

    @Column({ type: "varchar", nullable: true })
    trackingNumber: string;

    @Column({ type: "decimal", nullable: true })
    subtotal: number;
    
    @Column({ type: "decimal", nullable: true })
    total: number;
    
    @Column({ type: "decimal", nullable: true })
    shipping: number;
    
    @Column({ type: "decimal", nullable: true })
    tax: number;
    
    @Column({ type: "boolean", nullable: true })
    delivered: boolean;

    @Column({ type: "varchar", nullable: true })
    status: boolean;
    
    @Column({ type: "varchar", nullable: true })
    organization: string;

    @Column({ type: "varchar", nullable: true })
    public address: string;

    @Column({ type: "varchar", nullable: true })
    public postalCode: string;

    @Column({ type: "varchar", nullable: true })
    public city: string;

    @Column({ type: "varchar", nullable: true })
    public country: string;

    @Column({ type: "varchar", nullable: true })
    public phone: string;

    @OneToOne(() => Order, { nullable: true })
    @JoinColumn()
    public order: Order;
}