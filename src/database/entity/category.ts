import { Column, Entity } from "typeorm";
import { FullAuditEntity, IEntity } from "../utilities/entity/full-audit-entity";

@Entity("Category")
export class Category extends FullAuditEntity implements IEntity {
   
    @Column({ type: "varchar", length: 256 })
    public name: string;
    
    @Column({ type: "text" })
    public description: string;
    
    @Column({ type: "varchar", length: 256 })
    public displayName: string;
    
    @Column({ type: "varchar" })
    public smallImage: string;
    
    @Column({ type: "varchar" })
    public mediumImage: string;
    
    @Column({ type: "varchar" })
    public largeImage: string;
}