import { Injectable } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DispatchLog } from '../model/dispatch-log';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class DispatchlogService {
private _http: HttpClient;
private _baseUrl: string;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
this._http = http;
this._baseUrl = baseUrl;
  }

  getDispatchlogs(): Observable<DispatchLog[]> {
    return this._http.get<DispatchLog[]>(this._baseUrl + 'api/Dispatchlog/GetDispatchLogs')
  }

}
