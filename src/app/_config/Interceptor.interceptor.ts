
import { Injectable, NgModule } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { map, catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HTTPStatus {
    private requestInFlight$: BehaviorSubject<boolean>;
    constructor() {
        this.requestInFlight$ = new BehaviorSubject(false);
    }
    setHttpStatus(inFlight: boolean) {
        this.requestInFlight$.next(inFlight);
    }
    getHttpStatus(): Observable<boolean> {
        return this.requestInFlight$.asObservable();
    }
}


@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
    private _requests = 0;
    constructor(
        private _dataService: DataService,
        private status: HTTPStatus,
        private router: Router
    ) {
        _dataService = this._dataService;
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        ++this._requests;
        this.status.setHttpStatus(true);
        
        this._dataService.verificarSessao();
        let token = 'Bearer '.concat(this._dataService.recuperarSessao());

        const dupReq = req.clone({
            headers: req.headers.set('Authorization', token)
            .set('Content-Type', "application/json")
        });
        
        return next.handle(dupReq).pipe(
            map(event => {
                console.log(event);
                
                return event;
            }), catchError(error => {
                console.log("catch", error);
                console.warn(error.status);
                
                if (error.status === 401) {
                    console.log("401");
                    // this.auth.setToken(null);
                    // this.auth.setRedirectUrl(this.router.url);
                    // this.router.navigate(['/access']);
                }
                return throwError(error);
            }),
            finalize(() => {
                console.log("FINALIZE");
                --this._requests;
                this.status.setHttpStatus(this._requests > 0);
                // --this._requests;
                // this.status.setHttpStatus(this._requests > 0);
            })
        );
    }
}


@NgModule({
    providers: [
        HTTPStatus,
        HttpsRequestInterceptor,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpsRequestInterceptor,
            multi: true,
        },
    ],
})


export class Interceptor { }