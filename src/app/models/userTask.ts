export class UserTask{
    constructor(
    public _id: string,
    public description: string,
    public state: string,
    public userId: string,
    ){}
}