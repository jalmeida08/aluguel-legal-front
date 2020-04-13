
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from '../services/data.service';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

    constructor(private _dataService: DataService) {
        _dataService = this._dataService;
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        
        this._dataService.verificarSessao();

        console.log("Intercept");
        const dupReq = req.clone({
            headers: req.headers.set('key', 'DCtbqRXC8L'),
        });
        return next.handle(dupReq);
    }
}


@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpsRequestInterceptor,
            multi: true,
        },
    ],
})


export class Interceptor { }