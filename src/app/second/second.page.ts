import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgProgress } from '@ngx-progressbar/core';
import {LaunchPads} from '../Models/launchPads.model';
import {LaunchPadsService} from '../services/launch-Pads.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {
  launchPads : LaunchPads[];
  observablelaunchPads: Observable<LaunchPads[]>;

constructor(private launchPadsService : LaunchPadsService ) { }

ngOnInit() {
  this.launchPadsService.getLaunchPads().subscribe(result => {
    this.launchPads = result;
  });

  setTimeout(() => {
    this.observablelaunchPads = this.launchPadsService.getLaunchPads();
  },
    2000);
}

buttonClick(launchPadsId: string) {
  console.log(launchPadsId);
}

}
