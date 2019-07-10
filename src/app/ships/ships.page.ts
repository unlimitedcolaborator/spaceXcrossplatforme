import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgProgress } from '@ngx-progressbar/core';
import {Ships} from '../Models/ships.model';
import {ShipsService} from '../services/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.page.html',
  styleUrls: ['./ships.page.scss'],
})
export class ShipsPage implements OnInit {
  ships : Ships[];
  observableships: Observable<Ships[]>;

constructor(private shipsService : ShipsService ) { }

ngOnInit() {
  this.shipsService.getShips().subscribe(result => {
    this.ships = result;
  });

  setTimeout(() => {
    this.observableships = this.shipsService.getShips();
  },
    2000);
}

buttonClick(shipsId: string) {
  console.log(shipsId);
}

}
