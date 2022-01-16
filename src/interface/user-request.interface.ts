import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import {Request} from 'express';


export interface UserRequest extends Request {
    user?: DecodedIdToken
}