//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  ReplaySubject, Subject } from 'rxjs';
//import { Observable } from 'windowed-observable';

@Injectable()
export class SharedlibService {
  constructor() {}

  getName() {
    return 'hemant';
  }

  private _name = new ReplaySubject();
  readonly name$ = this._name.asObservable();

  private _name1 = new Subject();
  readonly name1$ = this._name1.asObservable();

  addName(name: string) {
    this._name.next(name);
  }

  getP() {
    return 'hhh';
  }

  // getProducts() {
  //   let header = new HttpHeaders().set(
  //     "Authorization",
  //      ('bearer' + (window as any)?.wktaaeshell?.data?.getAccessToken())
  //   );
  //   return this.http.get('/shellsamples',{headers:header});
  // }


}
