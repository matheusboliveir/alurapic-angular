import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';
import { tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadignService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(tap(event => {
      if(event instanceof HttpResponse) {
        this.loadignService.stop();
      } else {
        this.loadignService.start();
      }
    }));
  }
}
