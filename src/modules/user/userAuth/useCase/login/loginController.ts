import { LoginUseCase } from './loginUseCases';
import { Request, Response } from 'express';

class LoginController {
    constructor(public loginUseCase : LoginUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        const {
            username,
            password
        } = request.body;

        const result = await this.loginUseCase.execute({username, password});
        if(result.status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    LoginController
}