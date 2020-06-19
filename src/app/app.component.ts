import { Component } from '@angular/core';
import { HTTPStatus } from './_config/Interceptor.interceptor';
import { NgxSpinnerService } from 'ngx-spinner';
import { Alerta } from './_diretivas/alerta/alerta';
import { AlertaComponent } from './_diretivas/alerta/alerta.component';
import { DataService } from './services/data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	public alertas: Array<Alerta> = new Array<Alerta>();

	title = 'aluguel-legal-front';
	constructor(private httpStatus: HTTPStatus, private spinner: NgxSpinnerService, private _dataService: DataService) {
		this.httpStatus.getHttpStatus().subscribe((status: boolean) => {
			if (status) {
				spinner.show();
			} else {
				spinner.hide();
				this.mensagens();
			}
		});
	}

	private mensagens(){
		this.alertas = this._dataService.alertas;
	}

}
