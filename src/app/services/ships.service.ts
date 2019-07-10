import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Ships} from '../Models/ships.model';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  private readonly apiBaseUrl: string;
  
  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getShips(): Observable<Ships[]> {
    const requestEndpoint = this.apiBaseUrl + 'Ships';
    return this.http.get<Ships[]>(requestEndpoint).pipe(
      // finalize(() => this.loader.stop()),
      map(Ships => {
        console.log(Ships);
        return Ships;
      })
    );
  }
}
