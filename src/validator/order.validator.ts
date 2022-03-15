import joi from "joi"; 

export interface ICart {
    quantity: number;
    userId: string;
    skuId: string;
}

export const cartSchema = joi.object({
    skuId: joi.string().required(),
    quantity: joi.number().required()
});
