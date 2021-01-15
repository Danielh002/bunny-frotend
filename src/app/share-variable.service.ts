import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { UserTask } from './models/userTask';

@Injectable({
  providedIn: 'root'
})
export class ShareVariableService {

  sharedVariable$ = new ReplaySubject(1);
  updateValue(value: Array<UserTask>) {
      this.sharedVariable$.next(value);
  }
}
