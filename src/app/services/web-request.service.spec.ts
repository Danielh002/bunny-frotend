import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WebRequestService } from './web-request.service';

describe('WebRequestService', () => {
  let service: WebRequestService;
  let httpMock : HttpTestingController;
  let httpClient: HttpClient;



  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    httpMock = TestBed.get(HttpTestingController)
    httpClient = TestBed.get(HttpClient)
    service = TestBed.inject(WebRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
