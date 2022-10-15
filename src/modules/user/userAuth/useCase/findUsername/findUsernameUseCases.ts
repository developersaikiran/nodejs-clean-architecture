import { IUserAuthRepository } from '../../repository/IUserAuthRepository';
interface IRequests{ 
    username: string, 
    email: string, 
}

class FindUsernameUseCase {
    constructor(private userAuthRepository: IUserAuthRepository ){}

    async execute({ username, email }: IRequests):Promise<any>{
        try{
        const FindUsername = await this.userAuthRepository.findUsername({ username, email })
        if(FindUsername == null){
            return {
                status: false,
                message: 'Username is available...',
                data: {}
            };
        }else{
            return {
                status: true,
                message: 'Username is not available...',
                data: FindUsername
            };
        }
    }catch {
        return {
            status: false,
            message: 'Something went wrong, Please try again later...',
            data: {}
        };                
    }        

    };

}

export {
    FindUsernameUseCase
}