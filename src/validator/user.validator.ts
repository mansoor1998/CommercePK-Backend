import joi from "joi";


export interface IUserSignup {
    email: string;
    password: string
}

export const userSignupSchema = joi.object({
    email: joi.string().required(),
    password: joi.string().required()
});