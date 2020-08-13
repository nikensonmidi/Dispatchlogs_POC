import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators';
import { CacheService } from './cache.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private _cacheService: CacheService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // using firestore as we will need to store into a persistent storage
    // https://cloud.google.com/firestore/docs/manage-data/enable-offline
    // if it is not a get request get a fresh copy from server
    if (req.method !== 'GET') {
      this._cacheService.invalidateUrl(req.url);
      return next.handle(req);
    }
    const cacheResponse: HttpResponse<any> = this._cacheService.getItem(
      req.url
    );
    //  console.log(sessionStorage[req.url]);
    if (cacheResponse) {
      console.log('response was saved');
      console.log(cacheResponse);
      return of(cacheResponse);
    }

    // if no response found in cache, go fetch it from server and add to cache
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          console.log('add cache');
          this._cacheService.additem(req.url, event);
        }
      })
    );
  }
}
