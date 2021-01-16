import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UsersTasksService } from './users-tasks.service';
import { WebRequestService } from './web-request.service';

describe('UsersTasksService', () => {
  let service: UsersTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [WebRequestService]
    });
    service = TestBed.inject(UsersTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
