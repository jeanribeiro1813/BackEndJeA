import { getCustomRepository } from 'typeorm';
import Users from '../../../typeorm/entities/Users';
import UsersRepository from '../../../typeorm/repository/UsersRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import { hash } from 'bcryptjs';


interface IRequest{
  id:string;
  name:string;
  password:string;
  username:string;
}

export default class CreateUsers{
  public async criar({id,name,password,username}:IRequest): Promise<Users | undefined>{

    const repository =  getCustomRepository(UsersRepository);

    const userName = await repository.findByUsername(username);

    if(userName){
     throw new AppErrors('Esse Usuario já existe', 409);
    }

    const hashedPassword = await hash(password, 8);

    const user = repository.create({
      id,
      name,
      username,
      password:hashedPassword
    })

    await repository.save(user);

    return user;

  }
}
