import { AppErrors } from '../../../../shared/errors/AppErrors';
import { getCustomRepository, Repository } from 'typeorm';
import UsersRepository from '../../../typeorm/repository/UsersRepository';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../../../../config/auth';
import Users from '../../../typeorm/entities/Users';

interface IRequest {
  username: string;
  password: string;
}

interface IResponseDTO {
  user: Users;
  token: string;
}

export default class CreateSession {
  public async session({
    username,
    password,
  }: IRequest): Promise<IResponseDTO> {
    const repository = getCustomRepository(UsersRepository);

    const user = await repository.findByUsername(username);

    if (!user) {
      throw new AppErrors('Incorrect username/password', 404);
    }

    const password_confirmation = await compare(password, user.password);

    if (!password_confirmation) {
      throw new AppErrors('Incorrect email/password', 404);
    }

    const token = sign(
      {
        id: user.id,
      },
      authConfig.jwt.secret,
      {
        subject: user.id,
        expiresIn: authConfig.jwt.expireIn,
      },
    );

    return { user, token };
  }
}
