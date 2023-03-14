import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpclientService {
  constructor(private http: HttpClient) {}
  getUserfromServer() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
