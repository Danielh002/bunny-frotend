import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyTaskComponent } from '../dialog-body-task/dialog-body-task.component';
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
  userAndTaks: UserAndTask;
  tasks: Array<UserTask> = [];

  constructor(private usersAndTaskService: UsersTasksService, private matDialog: MatDialog, private shareVariableService: ShareVariableService) { 
  }

  ngOnInit(): void {
    this.shareVariableService.sharedVariable$.subscribe((userAndTasks: UserAndTask) => {
      this.userAndTaks = userAndTasks;
      this.tasks = userAndTasks.tasks ?? []
    })
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
          .addTask(description, selectedState, this.userAndTaks._id)
          .subscribe(
            (json: any) => {
              let tempTask = json.result
              this.tasks.push(new UserTask(tempTask.result_id, tempTask.description, tempTask.state, tempTask.userId));
            },
            (error) => console.log(error)
          ) 
        }
      }
    , (error) => console.log(error));
  }

  
  updateTask(index: number) {
    let task: UserTask = this.tasks[index]
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
              this.tasks[index].state = selectedState;
              this.tasks[index].description = description;
            },
            (error) => console.log(error)
          ) 
        }
      }
    , (error) => console.log(error));
  }

  deleteTask(index: number) {
    let user: UserTask = this.tasks[index]
    this.usersAndTaskService
    .deleteTask(user._id)
    .subscribe(
      (json: any) => this.tasks.splice(index,1),
      (error) => console.log(error)
    )
  }
}