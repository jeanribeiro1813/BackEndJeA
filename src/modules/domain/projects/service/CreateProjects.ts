
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

export default class CreateUsers{
  public async criar({id,
    title,
    zipcode,
    cost,
    done,
    deadline,
    username}:IRequest): Promise<Project | undefined>{

    const repository =  getCustomRepository(ProjectRepository);

    const index = await repository.findById(id);

    if(index){
     throw new AppErrors('Esse ID já existe', 409);
    }

    const project = repository.create({
      id,
      title,
      zipcode,
      cost,
      done,
      deadline,
      username
    })

    await repository.save(project);

    return project;

  }
}
