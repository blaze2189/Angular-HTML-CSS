/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpLoginService } from './http-login.service';

describe('HttpLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpLoginService]
    });
  });

  it('should ...', inject([HttpLoginService], (service: HttpLoginService) => {
    expect(service).toBeTruthy();
  }));
});
