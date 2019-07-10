import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgProgress } from '@ngx-progressbar/core';
import {Dragons} from '../Models/dragons.model';
import {DragonsService} from '../services/dragons.service';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.page.html',
  styleUrls: ['./dragons.page.scss'],
})
export class DragonsPage implements OnInit {
  dragons : Dragons[];
  observabledragons: Observable<Dragons[]>;

constructor(private dragonsService : DragonsService ) { }

ngOnInit() {
  this.dragonsService.getDragons().subscribe(result => {
    this.dragons = result;
  });

  setTimeout(() => {
    this.observabledragons = this.dragonsService.getDragons();
  },
    2000);
}

buttonClick(dragonsId: string) {
  console.log(dragonsId);
}

}
