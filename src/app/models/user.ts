import { Serializable } from "../utils/serializable-helper";

export class User extends Serializable{
    constructor(
    public _id?: string,
    public name?: string,
    ){
        super()
    }
}