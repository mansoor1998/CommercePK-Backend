import express, { NextFunction, Request, Response } from "express";

export const validator = (schema: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.validate(req.body, { abortEarly: false });
        if(result.error){
            return res.status(400).json({
                message: result.error.details.map((x: any) => x.message)
            });
        }

        next();
    }
}