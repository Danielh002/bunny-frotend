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
}
