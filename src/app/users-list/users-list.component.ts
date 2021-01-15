import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { UserAndTask } from '../models/usersAndTasks';
import { UsersTasksService } from '../services/users-tasks.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  userAndTask: Array<UserAndTask> = [];

  constructor(private usersAndTaskService: UsersTasksService) { }

  ngOnInit(): void {
    //this.userAndTask.push(new UserAndTask("123", "Daniel"));
    //this.userAndTask.push(new UserAndTask("123", "Pepe"))
    this.getUsersAndTask();
    console.log(this.userAndTask)

  }

  getUsersAndTask() {
    let tempArray: Array<UserAndTask> = [];
    this.usersAndTaskService
      .getUsersAndTask()
      .subscribe(
        (json: any) => {
          json["result"].map(function (element) {
            tempArray.push(new UserAndTask().fromJSON(element))
          })
          this.userAndTask = tempArray
        },
        (error) => console.log(error));
  }

  addUser(){
    
  }
}
