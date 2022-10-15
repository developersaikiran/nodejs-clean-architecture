import { UserAuthRepository } from '../../repository/implementations/userAuthRepository';
import { LoginController } from './loginController';
import { LoginUseCase } from './loginUseCases';

const userAuthRepository = new UserAuthRepository();
const loginUseCase = new LoginUseCase(userAuthRepository);
const loginController = new LoginController(loginUseCase);

export {
    loginController
}
