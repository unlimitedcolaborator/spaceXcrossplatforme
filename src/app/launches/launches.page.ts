import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgProgress } from '@ngx-progressbar/core';
import {Launches} from '../Models/launches.model';
import {LaunchesService} from '../services/launches.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.page.html',
  styleUrls: ['./launches.page.scss'],
})
export class LaunchesPage implements OnInit {
  launches : Launches[];
  observablelaunches: Observable<Launches[]>;

constructor(private launchesService : LaunchesService ) { }

ngOnInit() {
  this.launchesService.getLaunches().subscribe(result => {
    this.launches = result;
  });

  setTimeout(() => {
    this.observablelaunches = this.launchesService.getLaunches();
  },
    2000);
}

buttonClick(capsulesId: string) {
  console.log(capsulesId);
}

}
