import { generateToken } from '../../../../../middleware/auth';
import { IUserAuthRepository } from '../../repository/IUserAuthRepository';

class LoginUseCase {
    constructor(private userAuthRepository: IUserAuthRepository ){}

    async execute({username, password}:any):Promise<any>{
        try{
            const login = await this.userAuthRepository.login({username, password})
            if(login == null){
                return {
                    status: false,
                    message: 'Incorrect username or password...',
                    data: {}
                };
            }else{
                console.log({"************** 1 *************": login});
                
                const token = await generateToken(login)
                login.token = token;
                
                console.log("************** 3 *************");
                
                return {
                    status: true,
                    message: 'Login Successfully...',
                    data: login
                };
            }
        }catch {
            return {
                status: false,
                message: 'Something went wrong...',
                data: {}
            };                
        }
    };

}

export {
    LoginUseCase
}