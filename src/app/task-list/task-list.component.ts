import { Component, OnInit } from '@angular/core';
import { UserTask } from '../models/userTask';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Array<UserTask> = [];

  constructor() { 
    this.tasks.push( new UserTask( "123", "Hacer algo", "TO-DO", "123"));
    this.tasks.push( new UserTask( "123", "Hacer algo antes", "DONE", "123"));
  }

  ngOnInit(): void {
  }

}
