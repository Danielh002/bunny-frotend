import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UsersTasksService {

  readonly ROOT_URL;

  constructor( private webReqService: WebRequestService) {}

  getUsersAndTask(){
    return this.webReqService.get('getUsersAndTasks'); 
  }

  addUser(name: string){
    return this.webReqService.post('user', { name });
  }

  updateUser(userId: string, name: string, ){
    let updateOp = [
      {
        "propName": "name",
        "value": name
      }
    ]
    return this.webReqService.patch(`user/${userId}`, updateOp );
  }

  deleteUser(userId: string){
    return this.webReqService.delete(`user/${userId}`);
  }
}
