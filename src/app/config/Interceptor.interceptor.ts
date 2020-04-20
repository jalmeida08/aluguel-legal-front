
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
        let token = 'Bearer '.concat(this._dataService.recuperarSessao());
        const dupReq = req.clone({
            headers: req.headers.set('Authorization', token)
                .set("Content-Type", "application/json")
            
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