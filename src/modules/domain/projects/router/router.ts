import {Router} from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ProjectControllers from '../controller/ProjectControllers'
import isAutentication from '../../../../shared/middlewares/isAutentication'

const projectRouter =  Router();

const projectController =  new ProjectControllers()


projectRouter.use(isAutentication);

projectRouter.post('/criar',celebrate({
  [Segments.BODY]:{
    title: Joi.string().required(),
    zipcode: Joi.number().required(),
    cost: Joi.number().required(),
    done: Joi.boolean().required(),
    deadline: Joi.string().required(),
    username: Joi.string().required(),


  }

}),projectController.create);

projectRouter.get('/list',projectController.lista);

projectRouter.get('/list/:username',celebrate({

  [Segments.PARAMS]:{

    username:Joi.string().required()
  }
}),projectController.filter);

projectRouter.delete(
  '/delete/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  projectController.delete,
);

projectRouter.put(
  '/update/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  projectController.update,
);


export default projectRouter
