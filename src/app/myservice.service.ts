import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {
  constructor() {}
  serviceproperty;
  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
}
