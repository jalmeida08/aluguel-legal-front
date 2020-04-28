import { Component } from '@angular/core';
import { HTTPStatus } from './_config/Interceptor.interceptor';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'aluguel-legal-front';
  constructor(private httpStatus: HTTPStatus, private spinner: NgxSpinnerService) {
    this.httpStatus.getHttpStatus().subscribe((status: boolean) => {
      if (status) {
        spinner.show();
      }
      else {
        spinner.hide();
      }
    });
  }
}
