export class UserTask{
    constructor(
    public _id: string,
    public description: string,
    public state: number,
    public userId: string,
    ){}
}