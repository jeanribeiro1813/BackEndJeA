
import { getCustomRepository } from 'typeorm';
import Project from '../../../typeorm/entities/Project';
import ProjectRepository from '../../../typeorm/repository/ProjectRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';

interface IRequest{
  id:string;
  title:string;
  zipcode:number;
  cost:number;
  done:boolean
  deadline: string
  username: string
}

export default class UpdateProjects {
  public async update({
    id,
    title,
    zipcode,
    cost,
    done,
    deadline,
    username
  }: IRequest): Promise<Project | AppErrors> {
    const repository = getCustomRepository(ProjectRepository);

    const project = await repository.findById(id);

    if (!project) {
      throw new AppErrors('Não existe esse item', 404);
    }

    project.title = title ? title : project.title;
    project.zipcode = zipcode ? zipcode : project.zipcode;
    project.cost = cost ? cost : project.cost;
    project.done = done ? done : project.done;
    project.deadline = deadline ? deadline : project.deadline;
    project.username = username ? username : project.username;

    const result = await repository.save(project);

    return result;
  }
}
