import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyUserComponent } from '../dialog-body-user/dialog-body-user.component';
import { UserAndTask } from '../models/usersAndTasks';
import { UserTask } from '../models/userTask';
import { UsersTasksService } from '../services/users-tasks.service';
import { ShareVariableService } from '../share-variable.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  userAndTask: Array<UserAndTask> = [];

  constructor(private usersAndTaskService: UsersTasksService, private matDialog: MatDialog, private shareVariableService: ShareVariableService) { }

  ngOnInit(): void {
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

  sendingUserTasks(index: number){
    let userTask: Array<UserTask> = this.userAndTask[index].tasks
    this.shareVariableService.updateValue(userTask);
  }

  addUser() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      userName: ''
    }
    const dialogRef = this.matDialog.open(DialogBodyUserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if(data){
          let newUserName : string = data.userName as string
          this.usersAndTaskService
            .addUser(newUserName)
            .subscribe(
              (json: any) => this.userAndTask.push(new UserAndTask(json.result._id, json.result.name)),
              (error) => console.log(error)
            ) 
        }
      }
    , (error) => console.log(error));
  }

  updateUser(index: number) {
    let user: UserAndTask = this.userAndTask[index]
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      userName: user.name
    }
    const dialogRef = this.matDialog.open(DialogBodyUserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        let newUserName : string = data.userName as string
        this.usersAndTaskService
          .updateUser(user._id, newUserName)
          .subscribe(
            (json: any) => this.userAndTask[index].name = newUserName,
            (error) => console.log(error)
          )
      }
    , (error) => console.log(error));
  }

  deleteUser(index: number) {
    let user: UserAndTask = this.userAndTask[index]
    this.usersAndTaskService
    .deleteUser(user._id)
    .subscribe(
      (json: any) => this.userAndTask.splice(index,1),
      (error) => console.log(error)
    )
  }
}
