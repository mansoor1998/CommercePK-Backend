import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { FullAuditEntity, IEntity } from "../utilities/entity/full-audit-entity";
import { Order } from "./order";



@Entity("Payment")
export class Payment implements IEntity {
    @PrimaryColumn({ type: "uuid" })
    id: string;

    @Column({ type: "varchar", nullable: true })
    status: string;

    @Column({ type: "varchar", nullable: true })
    cardName: string;

    @Column({ type: "varchar", nullable: true })
    cardType: string;

    @Column({ type: "varchar", nullable: true })
    cardDate: string;

    @Column({ type: "varchar", nullable: true })
    cardNumber: string;

    @Column({ type: "varchar", nullable: true })
    cardVerificationValue: string;

    @Column({ type: "varchar", nullable: true })
    paymentType: string;

    @OneToOne(() => Order, { nullable: true })
    @JoinColumn()
    public order: Order;
}