import { UserAuthRepository } from '../../repository/implementations/userAuthRepository';
import { RegistrationController } from './registrationController';
import { RegistrationUseCase } from './registrationUseCases';

const userAuthRepository = new UserAuthRepository();
const registrationUseCase = new RegistrationUseCase(userAuthRepository);
const registrationController = new RegistrationController(registrationUseCase);

export {
    registrationController
}
