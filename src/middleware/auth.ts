
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const authConfig = require("../config/auth.json")

const generateToken = async (login: string)=> {
    return jwt.sign({ login }, authConfig.secret, {
        expiresIn: 86400,
    })
}

const verifyToken = async (request:any)=>{
    const authHeader = request.headers.authorization;
    let isValidToken:boolean =true;
    let message:string = "";
    if (!authHeader){
        isValidToken = false;
        message= 'No token provided';
        return {isValidToken, message}
    }
    const parts = authHeader.split(' ')
    if (parts.length != 2){
        isValidToken = false;
        message= 'Token error';
        return {isValidToken,message};
    }
    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)){
        isValidToken = false;
        message= 'Token malformatted';
        return {isValidToken,message,token};
    }

    return {isValidToken,message,token};
}

const verifyTokenForUser = async (request: Request, response: Response, next: NextFunction) => {
    const {isValidToken, message, token} = await verifyToken(request);
    
    if(!isValidToken){   
        return response.status(401).send({
            status: 0,
            msg: message
        })
    }
    jwt.verify(token, authConfig.secret, async (err: any, decoded: any) => {
        if (err) return response.status(401).send({
            status: 0,
            msg: 'token invalid'
        })

        if (decoded.login.role_name == "user") {
            return next();
        }else{
            return response.status(401).send({
                status: 0,
                msg: 'token invalid'
            })
        }
        // request.body.user_id = decoded.UserID;
    })
} 
export { verifyTokenForUser, generateToken }
