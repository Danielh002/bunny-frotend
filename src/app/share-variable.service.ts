import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { UserAndTask } from './models/usersAndTasks';

@Injectable({
  providedIn: 'root'
})
export class ShareVariableService {

  sharedVariable$ = new ReplaySubject(1);
  updateValue(value: UserAndTask) {
      this.sharedVariable$.next(value);
  }
}
