import Router from 'express';

import userRouter from '../domain/users/router/router';
import projectRouter from '../domain/projects/router/router'

const router = Router()

router.use('/users',userRouter)
router.use('/project',projectRouter)


export default router;
