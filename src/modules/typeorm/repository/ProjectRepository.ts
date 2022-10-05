import { Repository , EntityRepository } from "typeorm";
import Project from '../entities/Project';
import { ProjectProtocols } from "../protocols/ProjectProtocols";

@EntityRepository(Project)
export default class UsersRepository
 extends Repository<Project>
  implements ProjectProtocols{

  public async findById(id: string): Promise<Project | undefined> {

    const index =  this.findOne({ where: { id } });

    return index;

  }

  public async findByUsername(username: string):Promise<Project | undefined>{

    const nameuser = this.findOne({ where: {username}})

    return nameuser
  }
  findAll(): Promise<Project[] | undefined> {
    const all = this.find()

    return all;
  }
}
