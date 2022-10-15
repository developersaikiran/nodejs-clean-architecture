import { UserAuthRepository } from '../../repository/implementations/userAuthRepository';
import { FindUsernameController } from './findUsernameController';
import { FindUsernameUseCase } from './findUsernameUseCases';

const userAuthRepository = new UserAuthRepository();
const findUsernameUseCase = new FindUsernameUseCase(userAuthRepository);
const findUsernameController = new FindUsernameController(findUsernameUseCase);

export {
    findUsernameController
}
