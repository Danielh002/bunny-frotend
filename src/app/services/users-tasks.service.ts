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

  addTask(description: string, selectedState: string, userId: string){
    let body = {
      description: description,
      state: selectedState,
      userId: userId
    }
    return this.webReqService.post('userTask', body);
  }

  updateTask(taskId: string, description: string, selectedState: string){
    let updateOp = [
      {
        "propName": "description",
        "value": description
      },
      {
        "propName": "state",
        "value": selectedState
      }
    ]
    return this.webReqService.patch(`userTask/${taskId}`, updateOp );
  }

  deleteTask(taskId: string){
    return this.webReqService.delete(`userTask/${taskId}`);
  }
}