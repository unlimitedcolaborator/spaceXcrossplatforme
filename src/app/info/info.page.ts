import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgProgress } from '@ngx-progressbar/core';
import {InfoApi} from '../Models/infoApi.model';
import {InfoService} from '../services/info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  infoApi : InfoApi[];
  observableinfoApi: Observable<InfoApi[]>;

constructor(private infoService : InfoService ) { }

ngOnInit() {
  this.infoService.getInfoApi().subscribe(result => {
    this.infoApi = result;
  });

  setTimeout(() => {
    this.observableinfoApi = this.infoService.getInfoApi();
  },
    2000);
}

buttonClick(infoApiId: string) {
  console.log(infoApiId);
}

}
