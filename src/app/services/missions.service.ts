import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Missions} from '../Models/missions.model';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {
  private readonly apiBaseUrl: string;
  
  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getMissions(): Observable<Missions[]> {
    const requestEndpoint = this.apiBaseUrl + 'Missions';
    return this.http.get<Missions[]>(requestEndpoint).pipe(
      // finalize(() => this.loader.stop()),
      map(Missions => {
        console.log(Missions);
        return Missions;
      })
    );
  }
}
