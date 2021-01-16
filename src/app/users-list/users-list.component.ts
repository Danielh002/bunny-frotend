import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyUserComponent } from '../dialog-body-user/dialog-body-user.component';
import { SharedVar } from '../models/sharedVar';
import { UserAndTask } from '../models/usersAndTasks';
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
    this.shareVariableService.sharedVariableTaskToUser$.subscribe(
      (element: Array<UserAndTask>)  => this.userAndTask= element )
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
          this.userAndTask = tempArray;
          if(this.userAndTask.length > 0){
            this.sendingUserTasks(0);
          } 
        },
        (error) => console.log(error));
  }

  sendingUserTasks(index: number){
    let newSharedVar : SharedVar = new SharedVar(index, this.userAndTask)
    this.shareVariableService.updateUserToTask(newSharedVar);
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
        if(data){
          let newUserName : string = data.userName as string
          this.usersAndTaskService
            .updateUser(user._id, newUserName)
            .subscribe(
              (_) => this.userAndTask[index].name = newUserName,
              (error) => console.log(error)
            )
        }
      }
    , (error) => console.log(error));
  }

  deleteUser(index: number) {
    let user: UserAndTask = this.userAndTask[index]
    this.usersAndTaskService
    .deleteUser(user._id)
    .subscribe(
      (json: any) => {
        this.userAndTask.splice(index,1);
        this.sendingUserTasks(-1);
      },
      (error) => console.log(error)
    )
  }
}
