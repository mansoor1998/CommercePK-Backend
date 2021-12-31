import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { Option } from "./option";
import { SKU } from "./sku";
import { Variant } from "./variant";

@Entity("SKUValue")
export class SKUValue {
    @Column({ type: "uuid", primary: true })
    public productId: string;

    @ManyToOne(() => Variant, variant => variant.id)
    @JoinColumn({ name: 'variantId' })
    public variant: Variant | undefined;

    @Column({ primary: true })
    public variantId: string;

    @ManyToOne(() => Option, option => option.id)
    @JoinColumn({ name: 'optionId' })
    public option: Option | undefined;

    @Column()
    public optionId: string;

    @ManyToOne(() => SKU, sku => sku.id)
    @JoinColumn({ name: 'sKUId' })
    public SKU: SKU | undefined;

    @Column({ primary: true })
    public sKUId: string;
}