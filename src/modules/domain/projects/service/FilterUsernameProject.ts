import { getCustomRepository } from "typeorm";
import Project from '../../../typeorm/entities/Project'
import ProjectRepository from '../../../typeorm/repository/ProjectRepository'
import {AppErrors} from '../../../../shared/errors/AppErrors';

interface IRequestDTO {
  username: string;
}


class LoadFilterServices{
  public async filter ({username}: IRequestDTO): Promise < Project[] | AppErrors > {

      const projetosRepository = getCustomRepository(ProjectRepository);

      const index_Prod = await projetosRepository.createQueryBuilder().select()
      .where(`username::text ILIKE :username  `,
      {username: `%${username}%`,}).getMany();

      if(!index_Prod){
        throw new AppErrors ('Não Existe esse Usuario',40);
      }

      return index_Prod;
}
  }


export default LoadFilterServices;
