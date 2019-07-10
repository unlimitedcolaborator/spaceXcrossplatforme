import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgProgress } from '@ngx-progressbar/core';
import {LandingPads} from '../Models/landingPads.model';
import {LandingPadsService} from '../services/landing-Pads.service';

@Component({
  selector: 'app-landing-pads',
  templateUrl: './landing-pads.page.html',
  styleUrls: ['./landing-pads.page.scss'],
})
export class LandingPadsPage implements OnInit {
  landingPads : LandingPads[];
  observablelandingPads: Observable<LandingPads[]>;

constructor(private landingPadsService : LandingPadsService ) { }

ngOnInit() {
  this.landingPadsService.getLandingPads().subscribe(result => {
    this.landingPads = result;
  });

  setTimeout(() => {
    this.observablelandingPads = this.landingPadsService.getLandingPads();
  },
    2000);
}

buttonClick(landingPadsId: string) {
  console.log(landingPadsId);
}

}