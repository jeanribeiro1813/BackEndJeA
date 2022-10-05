import Project from "../entities/Project";

export interface ProjectProtocols {

  findById(id: string) : Promise<Project | undefined>
  findByUsername(username: string) : Promise<Project | undefined>
  findAll() : Promise<Project[]| undefined>
}
