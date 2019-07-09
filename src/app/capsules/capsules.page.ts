import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgProgress } from '@ngx-progressbar/core';
import {Capsules} from '../Models/capsules.model';
import {CapsuleService} from '../services/capsule.service';

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.page.html',
  styleUrls: ['./capsules.page.scss'],
})
export class CapsulesPage implements OnInit {
    capsules : Capsules[];
    observablecapsules: Observable<Capsules[]>;

  constructor(private capsuleService : CapsuleService ) { }

  ngOnInit() {
    this.capsuleService.getCapsules().subscribe(result => {
      this.capsules = result;
    });

    setTimeout(() => {
      this.observablecapsules = this.capsuleService.getCapsules();
    },
      2000);
  }

  buttonClick(capsulesId: string) {
    console.log(capsulesId);
  }

}
