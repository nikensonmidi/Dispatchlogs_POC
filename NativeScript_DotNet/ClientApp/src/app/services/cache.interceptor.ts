import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap  } from 'rxjs/operators';
import { CacheService } from './cache.service';

export class CacheInterceptor implements HttpInterceptor {
  constructor(private _cacheService: CacheService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const cacheResponse: HttpResponse<any> = this._cacheService.getItem(req.url);
      if (cacheResponse) {
console.log('response was saved');
console.log(cacheResponse);
        return of(cacheResponse);
       }

  // if no response found in cache, go fetch it from server and add to cache
return next.handle(req).pipe(
tap( event => {
if ( event instanceof HttpResponse) {
  this._cacheService.additem(req.url, event);
}

})
);

    }

}
