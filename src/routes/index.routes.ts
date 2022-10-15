import { Router } from 'express';
const router = Router();
let version = 'v1';

import { userAuthRouter } from "./userAuth.routes";

router.use('/api/'+version+'/user', userAuthRouter)

export {
    router
}