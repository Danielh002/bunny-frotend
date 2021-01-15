import { User } from "./user";
import { UserTask } from "./userTask";

export class UserAndTask extends User{
    tasks?: Array<UserTask>;
    constructor( id?: string, name?: string, task?:  Array<UserTask>){
        super(id, name);
        this.tasks = task;
    }
}