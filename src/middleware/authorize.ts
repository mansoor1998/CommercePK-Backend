import express, { NextFunction, Request, Response } from "express";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import ProjectDependencies from "../dependencies";
import { UserRequest } from "../interface/user-request.interface";

export const authorize = (roles: string[]) => {
    return (req: UserRequest, res: Response, next: NextFunction) => {
        const { authService } = ProjectDependencies.dependencies;
        const authHeader = req.headers.authorization;

        if(authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.split(' ')[1];
            authService.verifyAndDecodeToken(token).then(payload => {
                req.user = payload;
                next();
            }).catch(e => {
                res.status(500).send({ message: "System error" });
            });            
        } else {
            res.status(401).send({
                message: "invalid token"
            });
        }
    }
}