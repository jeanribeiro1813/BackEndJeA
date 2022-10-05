import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';
import router from '../modules/router'
import { AppErrors } from './errors/AppErrors';
import './database/'
import 'reflect-metadata';
import { errors } from 'celebrate';




const app = express();

app.use(cors());
app.use(express.json())

app.use(router);

app.use(errors());


app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    console.log(error);
    if (error instanceof AppErrors) {
      return response.status(error.statusCode).json({
        status: 'Error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'Error Server',
      message: 'Erro no servidor Interno',
    });
  },
);

app.listen(3333,()=>{
  console.log('Inicio Servidor Porta:3333')
})

