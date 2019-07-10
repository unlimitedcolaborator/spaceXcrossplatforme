import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgProgress } from '@ngx-progressbar/core';
import {History} from '../Models/history.model';
import {HistoryService} from '../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  history : History[];
  observablehistory: Observable<History[]>;

constructor(private historyService : HistoryService ) { }

ngOnInit() {
  this.historyService.getHistory().subscribe(result => {
    this.history = result;
  });

  setTimeout(() => {
    this.observablehistory = this.historyService.getHistory();
  },
    2000);
}

buttonClick(historyId: string) {
  console.log(historyId);
}

}
