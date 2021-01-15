import { Component, OnInit } from '@angular/core';
import { UserTask } from '../models/userTask';
import { ShareVariableService } from '../share-variable.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Array<UserTask> = [];

  constructor(private shareVariableService: ShareVariableService) { 
    //this.tasks.push( new UserTask( "123", "Hacer algo", "TO-DO", "123"));
    //this.tasks.push( new UserTask( "123", "Hacer algo antes", "DONE", "123"));
  }

  ngOnInit(): void {
    this.shareVariableService.sharedVariable$.subscribe((newTasks: Array<UserTask>)  => this.tasks = newTasks
    )
  }
}
