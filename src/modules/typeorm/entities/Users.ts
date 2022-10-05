import { Column, CreateDateColumn,Entity,PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
class Users {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}

export default Users
