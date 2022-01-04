import joi from "joi";

// declare module "joi" {
//     export interface ObjectSchema<N = null> { }
//     export function object<T>(schema: T): ObjectSchema<T>;
// }


export interface IVariant {
    name: string;
    description: string;
    options: {
        name: string;
    }[]
}

export const variantSchema = joi.object({
    name: joi.string().required(),
    description: joi.string()
});

export interface ISKUVariant {
    skuNumber: string;
    trackInventory: number;
    unitPrice: number;
    unitCose: number;
    variants: { optionName: string }[]
}

export const skuVariantSchema = joi.object({
    skuNumber: joi.string().required(),
    trackInventory: joi.boolean().required(),
    unitPrice: joi.number().required(),
    unitCost: joi.number(),
    variants: joi.array().items(joi.object({
        optionName: joi.string().required()
    }))
});

export interface IProduct {
    title: string
    code: string;
    keywords: string;
    description: string;
    unitCost: number;
    productSKU: string;
    // trackInventory: boolean;
    unitPrice: number;
    weight: number;
    smallImage: string;
    mediumImage: string;
    largeImage: string;
    variants: IVariant[];
    skuNumber: string;
    skuVariants: ISKUVariant[];
}

export const productSchema = joi.object({
    title: joi.string().required(),
    code: joi.string(),
    keywords: joi.string(),
    description: joi.string(),
    unitCost: joi.number(),
    unitPrice: joi.number(),
    skuNumber: joi.string(),
    // productSKU: joi.string(),
    trackInventory: joi.number(),
    weight: joi.number(),
    smallImage: joi.string(),
    mediumImage: joi.string(),
    largeImage: joi.string(),
    status: joi.string(),
    variants: joi.array().items(variantSchema).unique((a,b) => a.name === b.name),
    skuVariants: joi.array().items(skuVariantSchema)
    // SKUVariants: joi.array().items(SKUVariants)
});