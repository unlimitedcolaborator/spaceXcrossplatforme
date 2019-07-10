import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgProgress } from '@ngx-progressbar/core';
import {Rocket} from '../Models/rocket.model';
import {RocketService} from '../services/rocket.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.page.html',
  styleUrls: ['./rockets.page.scss'],
})
export class RocketsPage implements OnInit {
  rockets : Rocket[];
  observablerockets: Observable<Rocket[]>;

constructor(private rocketsService : RocketService ) { }

ngOnInit() {
  this.rocketsService.getRockets().subscribe(result => {
    this.rockets = result;
  });

  setTimeout(() => {
    this.observablerockets = this.rocketsService.getRockets();
  },
    2000);
}

buttonClick(rocketsId: string) {
  console.log(rocketsId);
}

}