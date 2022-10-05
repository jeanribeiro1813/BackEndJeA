import { getCustomRepository } from 'typeorm';
import Project from '../../../typeorm/entities/Project';
import ProjectRepository from '../../../typeorm/repository/ProjectRepository';

export default class ListaProject{

  public async lista(): Promise<Project[] | undefined>{

    const repository =  getCustomRepository(ProjectRepository);

    const all = await repository.findAll();

    return all;

  }
}
