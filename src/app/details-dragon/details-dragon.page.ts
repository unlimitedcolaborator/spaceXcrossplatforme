import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import {Dragons} from '../Models/dragons.model';
import {DragonsService} from '../services/dragons.service';

@Component({
  selector: 'app-details-dragon',
  templateUrl: './details-dragon.page.html',
  styleUrls: ['./details-dragon.page.scss'],
})
export class DetailsDragonPage implements OnInit {
  dragons : Dragons[];
  observableldragons: Observable<Dragons[]>;

  constructor(private activetedRoute: ActivatedRoute, private dragonsService: DragonsService) { }

  ngOnInit() {
    let id: string = this.activetedRoute.snapshot.paramMap.get('id');
    this.dragonsService.getDragonsById(id).subscribe(result => {
      this.dragons = result;
    });
  }

}
