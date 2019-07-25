import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import {LandingPads} from '../Models/landingPads.model';
import {LandingPadsService} from '../services/landing-Pads.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  landingPads : LandingPads[];
  observablelandingPads: Observable<LandingPads[]>;

  constructor(private activetedRoute: ActivatedRoute, private landingPadsService: LandingPadsService) { }

  ngOnInit() {
    let id: string = this.activetedRoute.snapshot.paramMap.get('id');
    this.landingPadsService.getLandingPadsById(id).subscribe(result => {
      this.landingPads = result;
    });
  }
}
