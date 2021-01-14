import { Component, OnInit } from '@angular/core';
import { UserAndTask } from '../models/usersAndTasks';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  userAndTask: Array<UserAndTask> = [];
  
  constructor() { }

  ngOnInit(): void {
    this.userAndTask.push(new UserAndTask("123","Daniel"));
    this.userAndTask.push(new UserAndTask("123","Pepe"))
  }
}
