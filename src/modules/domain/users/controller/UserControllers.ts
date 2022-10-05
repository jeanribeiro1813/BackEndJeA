import { Request, Response } from "express";
import CreateUsers from "../service/CreateUsers";
import SessionUsers from '../service/SessionUsers'

export default class UserControllers{
  public async create (req:Request,res:Response){

    const {id,name,username,password} = req.body;

    const createFunc  = new CreateUsers();

    const result = await createFunc.criar({
      id,name,username,password
    })

    return res.status(200).json(result);
  }

    public async execute(req: Request, res: Response) {
      const { username, password } = req.body;

      const sessao = new SessionUsers();

      const result = await sessao.session({ username, password });

      return res.json(result);
    }
  }

