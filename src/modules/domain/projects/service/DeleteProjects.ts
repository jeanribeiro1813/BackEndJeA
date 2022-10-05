
import { getCustomRepository } from 'typeorm';
import ProjectRepository from '../../../typeorm/repository/ProjectRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import Project from '../../../typeorm/entities/Project';

interface IRequest {
  id: string;
}

export default class DeleteProjects {
  public async delete({ id }: IRequest): Promise<void> {
    const repository = getCustomRepository(ProjectRepository);

    const project = await repository.findOne({ id });

    if (!project) {
      throw new AppErrors('Não existe esse item', 404);
    }

    await repository.remove(project);
  }
}
