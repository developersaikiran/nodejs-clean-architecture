import { FindUsernameUseCase } from './findUsernameUseCases';
import { Request, Response } from 'express';

class FindUsernameController {
    constructor(public FindUsernameUseCase : FindUsernameUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        const { 
            username, 
            email,
        } = request.body;

        const result = await this.FindUsernameUseCase.execute({ username, email });

        if(result.status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    FindUsernameController
}