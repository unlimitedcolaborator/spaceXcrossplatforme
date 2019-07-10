import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {LandingPads} from '../Models/landingPads.model';

@Injectable({
  providedIn: 'root'
})
export class LandingPadsService {
  private readonly apiBaseUrl: string;
  
  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getLandingPads(): Observable<LandingPads[]> {
    const requestEndpoint = this.apiBaseUrl + 'landpads';
    return this.http.get<LandingPads[]>(requestEndpoint).pipe(
      // finalize(() => this.loader.stop()),
      map(LandingPads => {
        console.log(LandingPads);
        return LandingPads;
      })
    );
  }
}
