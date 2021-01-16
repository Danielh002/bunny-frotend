import { UserAndTask } from "./usersAndTasks";

export class SharedVar{
    constructor(
    public userIndex: number,
    public currentList : Array<UserAndTask>
    ){}
}