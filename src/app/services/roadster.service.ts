import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Roadster} from '../Models/roadster.model';

@Injectable({
  providedIn: 'root'
})
export class RoadsterService {
  private readonly apiBaseUrl: string;
  
  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getRoadster(): Observable<Roadster[]> {
    const requestEndpoint = this.apiBaseUrl + 'Roadster';
    return this.http.get<Roadster[]>(requestEndpoint).pipe(
      // finalize(() => this.loader.stop()),
      map(Roadster => {
        console.log(Roadster);
        return Roadster;
      })
    );
  }
}
