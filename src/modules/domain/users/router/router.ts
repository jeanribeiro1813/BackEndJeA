import {Router} from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UserControllers from '../controller/UserControllers'

const userRouter =  Router();

const userController =  new UserControllers()


userRouter.post('/criar',userController.create)

userRouter.post(
  '/sessao',
  celebrate({
    [Segments.BODY]: {
      username: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  userController.execute,
);


export default userRouter
