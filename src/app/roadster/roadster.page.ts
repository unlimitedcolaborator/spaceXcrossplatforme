import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgProgress } from '@ngx-progressbar/core';
import {Roadster} from '../Models/roadster.model';
import {RoadsterService} from '../services/roadster.service';

@Component({
  selector: 'app-roadster',
  templateUrl: './roadster.page.html',
  styleUrls: ['./roadster.page.scss'],
})
export class RoadsterPage implements OnInit {
  roadster : Roadster[];
  observableroadster: Observable<Roadster[]>;

constructor(private roadsterService : RoadsterService ) { }

ngOnInit() {
  this.roadsterService.getRoadster().subscribe(result => {
    this.roadster = result;
  });

  setTimeout(() => {
    this.observableroadster = this.roadsterService.getRoadster();
  },
    2000);
}

buttonClick(roadsterId: string) {
  console.log(roadsterId);
}

}
