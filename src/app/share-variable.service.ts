import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { SharedVar } from './models/sharedVar';
import { UserAndTask } from './models/usersAndTasks';

@Injectable({
  providedIn: 'root'
})
export class ShareVariableService {

  sharedVariableUserToTask$ = new ReplaySubject(1);
  sharedVariableTaskToUser$ = new ReplaySubject(1);


  updateUserToTask( shareVar: SharedVar) {
      this.sharedVariableUserToTask$.next(shareVar);
  }

  updateTaskToUsers(value: Array<UserAndTask>) {
    this.sharedVariableTaskToUser$.next(value);
  }
}
