import { Request, Response } from "express";
import CreateProjects from "../service/CreateProjects";
import UpdateProjects from "../service/UpdateProjects";
import DeleteProjects from "../service/DeleteProjects";
import ListaProjects from "../service/ListaProjects";
import FilterUsernameProject from "../service/FilterUsernameProject";



export default class ProjectControllers{
  public async create (req:Request,res:Response){

    const {  id,
      title,
      zipcode,
      cost,
      done,
      deadline,
      username} = req.body;

    const createFunc  = new CreateProjects();

    const result = await createFunc.criar({
      id,
      title,
      zipcode,
      cost,
      done,
      deadline,
      username
    })

    return res.status(200).json(result);
  }

  public async lista(req:Request,res:Response){

    const list = new ListaProjects();

    const result = await list.lista()

    return res.status(200).json(result)
  }

  public async filter(request: Request, response: Response): Promise<Response> {

    const {username} = request.params

    const loadFuncao = new FilterUsernameProject();

    const funcao = await loadFuncao.filter({username});

    return response.json(funcao);

  }

  public async update (req:Request,res:Response){

    const {id} = req.params;

    const {
      title,
      zipcode,
      cost,
      done,
      deadline,
      username} = req.body;

    const createFunc  = new UpdateProjects();

    const result = await createFunc.update({
      id,
      title,
      zipcode,
      cost,
      done,
      deadline,
      username
    })

    return res.status(200).json(result);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const result = new DeleteProjects();

    await result.delete({ id });

    return res.json('Deletado com sucesso');
  }
  }

