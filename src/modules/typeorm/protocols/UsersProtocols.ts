import Users from "../entities/Users";

export interface UsersProtocols {

  findById(id: string) : Promise<Users | undefined>
  findByUsername(username: string) : Promise<Users | undefined>
  findAll() : Promise<Users[]| undefined>
}
