import { TestBed } from '@angular/core/testing';

import { SocketService } from './socket.service';

describe('SocketService', () => {
  // let service: SocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // service = TestBed.inject(SocketService);
  });

  it('should be created', () => {
    const service:SocketService=TestBed.get(SocketService);
    expect(service).toBeTruthy();
  });
});
