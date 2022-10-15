import { Router } from "express";
import { joiValidate } from "../helper/validate";
import { verifyTokenForUser } from "../middleware/auth";
import { userSchema } from "../middleware/routesValidator/user.validate";
import { loginController } from "../modules/user/userAuth/useCase/login";
import { registrationController } from "../modules/user/userAuth/useCase/registration";

const userAuthRouter = Router();

userAuthRouter.post('/login', joiValidate(userSchema.login), (request, response)=>{
    loginController.handle(request, response);
})

userAuthRouter.post('/registration', joiValidate(userSchema.registration),  (request, response)=>{
    registrationController.handle(request, response);
})

export {
    userAuthRouter
}