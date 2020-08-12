import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class CacheService {

  private _requests: any = {};

  constructor() { }
additem(url: string, response: HttpResponse<any>): void {
this._requests[url] = response;
}

getItem(url: string): HttpResponse<any> | undefined {
return this._requests[url];
}

invalidateUrl(url: string): void{
  this._requests[url] = undefined;
}
clearCache(): void{
  this._requests = {};
}


}
