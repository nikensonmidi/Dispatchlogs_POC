import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class CacheService {
  private _requests: any = {};

  constructor() {}
  additem(url: string, response: HttpResponse<any>): void {
    this._requests[url] = response;
    sessionStorage[url] = JSON.stringify(response);
  }

  getItem(url: string): HttpResponse<any> | undefined {
   // this._requests[url] = JSON.parse(sessionStorage[url]) as HttpResponse<any>;
    return this._requests[url];
  }

  invalidateUrl(url: string): void {
    this._requests[url] = undefined;
    sessionStorage[url] = undefined;
  }
  clearCache(): void {
    this._requests = {};
  }
}
