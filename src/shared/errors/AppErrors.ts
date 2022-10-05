import {ErrorInterface} from './AppErrorsInterface';

export class AppErrors implements ErrorInterface{
  public readonly  message: string;
  public readonly  statusCode: number;

  constructor(message:string, statusCode:number){
    this.message= message;
    this.statusCode= statusCode;
  }

}
