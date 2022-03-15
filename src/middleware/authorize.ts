import express, { NextFunction, Request, Response } from "express";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import ProjectDependencies from "../dependencies";
import { UserRequest } from "../interface/user-request.interface";


const authorizeRoles = (payload: DecodedIdToken, roles: string[]) => {
    return roles.some(role => payload[role])
}

export const authorize = (roles: string[] = []) => {
    return (req: UserRequest, res: Response, next: NextFunction) => {
        const { authService } = ProjectDependencies.dependencies;
        const authHeader = req.headers.authorization;

        if(authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.split(' ')[1];
            authService.verifyAndDecodeToken(token).then(payload => {
                if(roles.length > 0 && !authorizeRoles(payload, roles)) return res.status(403).send();
                req.user = payload;
                next();
            }).catch((e) => {
                // if (e.errorInfo.code == 'auth/id-token-expired')
                    return res.status(401).send({ message: "invalid token" });
                // else return res.status(401).send({ message: "System error" });
            });            
        } else {
            res.status(401).send({
                message: "invalid token"
            });
        }
    }
}