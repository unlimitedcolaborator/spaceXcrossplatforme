import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Cores} from '../Models/cores.model';
import { CoresService} from '../services/cores.service';

@Component({
  selector: 'app-cores',
  templateUrl: './cores.page.html',
  styleUrls: ['./cores.page.scss'],
})
export class CoresPage implements OnInit {
  cores : Cores[];
  observablecores: Observable<Cores[]>;

  constructor(private coresService : CoresService ) { }

  ngOnInit() {
    this.coresService.getCores().subscribe(result => {
      this.cores = result;
    });

    setTimeout(() => {
      this.observablecores = this.coresService.getCores();
    },
      2000);
  }

  buttonClick(coresId: string) {
    console.log(coresId);
  }

}
