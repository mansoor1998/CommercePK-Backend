import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, Unique } from "typeorm";
import { SKU, User } from ".";
import { v4 as uuid } from 'uuid';


@Entity("Cart")
@Unique(["skuId", "userId"])
export class Cart {
   
    @PrimaryColumn({ type: "uuid" })
    public id: string;

    @Column({ type: "integer" })
    public quantity: number;

    // associations for SKU.
    @ManyToOne(() => SKU, sku => sku.id)
    @JoinColumn({ name: 'skuId' })
    public sku: SKU | undefined;
    // skuId for the sku association.
    @Column()
    public skuId: string;


    // // association for user.
    // @ManyToOne(() => User, user => user.id)
    // @JoinColumn({ name: 'userId' })
    // public user: User | undefined;
    // user id for the user association.
    @Column()
    public userId: string;

    @BeforeInsert()
    addId(){
        this.id = uuid();
    }

}