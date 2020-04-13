import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    constructor(private _dataService: DataService) {
        this._dataService = _dataService;
    }

    ngOnInit() {
        this._dataService.verificarSessao();
    }
}