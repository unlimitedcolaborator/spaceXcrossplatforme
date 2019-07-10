import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgProgress } from '@ngx-progressbar/core';
import {Payloads} from '../Models/payloads.model';
import {PayloadsService} from '../services/payloads.service';


@Component({
  selector: 'app-payload',
  templateUrl: './payload.page.html',
  styleUrls: ['./payload.page.scss'],
})
export class PayloadPage implements OnInit {
  payloads : Payloads[];
  observablepayloads: Observable<Payloads[]>;

constructor(private payloadsService : PayloadsService ) { }

ngOnInit() {
  this.payloadsService.getPayloads().subscribe(result => {
    this.payloads = result;
  });

  setTimeout(() => {
    this.observablepayloads = this.payloadsService.getPayloads();
  },
    2000);
}

buttonClick(payloadsId: string) {
  console.log(payloadsId);
}

}
