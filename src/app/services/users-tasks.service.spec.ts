import { TestBed } from '@angular/core/testing';

import { UsersTasksService } from './users-tasks.service';

describe('UsersTasksService', () => {
  let service: UsersTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
