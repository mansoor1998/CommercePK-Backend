import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { IEntity } from "../utilities/entity/full-audit-entity";
import { Order } from "./order";

@Entity("OrderItem")
export class OrderItem implements IEntity {

    @PrimaryColumn({ type: "uuid" })
    id: string;

    @Column({ type: "decimal", nullable: true })
    total: number;

    @Column({ type: "decimal", nullable: true })
    weight: number;

    @Column({ type: "integer", nullable: true })
    quantity: number;

    @Column({ type: "decimal", nullable: true })
    unitCost: number;

    @Column({ type: "decimal", nullable: true })
    unitPrice: number;

    // duplicate identifiers of the products/subproducts
    @Column({ type: "varchar", nullable: true })
    code: string;

    @Column({ type: "varchar", nullable: true })
    name: string;

    @Column({ type: "varchar", nullable: true })
    image: string;

    // ids without associations.
    @Column({ type: "varchar", nullable: true })
    productId: string;

    @Column({ type: "varchar", nullable: true })
    skuId: string;

    @ManyToOne(() => Order, { cascade: true })
    public order: Order;
}
