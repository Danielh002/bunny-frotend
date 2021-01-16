import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyTaskComponent } from '../dialog-body-task/dialog-body-task.component';
import { SharedVar } from '../models/sharedVar';
import { UserAndTask } from '../models/usersAndTasks';
import { UserTask } from '../models/userTask';
import { UsersTasksService } from '../services/users-tasks.service';
import { ShareVariableService } from '../share-variable.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  userAndTask: Array<UserAndTask> = [];
  currentIndex: number = -1;
  constructor(private usersAndTaskService: UsersTasksService, private matDialog: MatDialog, private shareVariableService: ShareVariableService) { 
  }

  ngOnInit(): void {
    this.shareVariableService.sharedVariableUserToTask$.subscribe((sharedVar: SharedVar) => {
      this.userAndTask = sharedVar.currentList;
      this.currentIndex = sharedVar.userIndex;
    })
  }

  sendingTaskToUser(){
    this.shareVariableService.updateTaskToUsers(this.userAndTask);
  }

  addTask() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      state: 'TO-DO',
      description: ''
    }
    const dialogRef = this.matDialog.open(DialogBodyTaskComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if(data){
          let description : string = data.description as string;
          let selectedState: string = data.selectedvalue as string;
          this.usersAndTaskService
          .addTask(description, selectedState, this.userAndTask[this.currentIndex]._id)
          .subscribe(
            (json: any) => {
              let tempTask = json.result
              this.userAndTask[this.currentIndex].tasks = this.userAndTask[this.currentIndex].tasks ?? []
              this.userAndTask[this.currentIndex].tasks.push(new UserTask(tempTask.result_id, tempTask.description, tempTask.state, tempTask.userId));
              this.sendingTaskToUser()
            },
            (error) => console.log(error)
          ) 
        }
      }
    , (error) => console.log(error));
  }

  
  updateTask(index: number) {
    let task: UserTask =  this.userAndTask[this.currentIndex].tasks[index]
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      state: task.state,
      description: task.description
    }
    const dialogRef = this.matDialog.open(DialogBodyTaskComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if(data){
          let description : string = data.description as string;
          let selectedState: string = data.selectedvalue as string;
          this.usersAndTaskService
          .updateTask(task._id, description, selectedState)
          .subscribe(
            (_) => {
              this.userAndTask[this.currentIndex].tasks[index].state = selectedState;
              this.userAndTask[this.currentIndex].tasks[index].description = description;
              this.sendingTaskToUser()
            },
            (error) => console.log(error)
          ) 
        }
      }
    , (error) => console.log(error));
  }

  deleteTask(index: number) {
    let user: UserTask =  this.userAndTask[this.currentIndex].tasks[index]
    this.usersAndTaskService
    .deleteTask(user._id)
    .subscribe(
      (json: any) => {
        this.userAndTask[this.currentIndex].tasks.splice(index,1),
        this.sendingTaskToUser();
      },
      (error) => console.log(error)
    )
  }
}