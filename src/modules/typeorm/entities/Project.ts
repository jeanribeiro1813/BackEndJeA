import { Column, CreateDateColumn,Entity,PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity('projects')
class Project {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  zipcode: number;

  @Column()
  cost: number;

  @Column()
  done: boolean;

  @Column()
  deadline: string;

  @Column()
  username: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}

export default Project
