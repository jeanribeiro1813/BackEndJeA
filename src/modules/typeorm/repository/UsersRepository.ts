import { Repository , EntityRepository } from "typeorm";
import Users from '../entities/Users';
import { UsersProtocols } from "../protocols/UsersProtocols";

@EntityRepository(Users)
export default class UsersRepository
 extends Repository<Users>
  implements UsersProtocols{

  public async findById(id: string): Promise<Users | undefined> {

    const index =  this.findOne({ where: { id } });

    return index;

  }

  public async findByUsername(username: string):Promise<Users | undefined>{

    const nameuser = this.findOne({ where: {username}})

    return nameuser
  }
  findAll(): Promise<Users[] | undefined> {
    const all = this.find()

    return all;
  }
}
