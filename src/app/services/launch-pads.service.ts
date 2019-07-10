import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LaunchPads } from '../Models/launchPads.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchPadsService {
  private readonly apiBaseUrl: string;
  
  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getLaunchPads(): Observable<LaunchPads[]> {
    const requestEndpoint = this.apiBaseUrl + 'LaunchPads';
    return this.http.get<LaunchPads[]>(requestEndpoint).pipe(
      // finalize(() => this.loader.stop()),
      map(LaunchPads => {
        console.log(LaunchPads);
        return LaunchPads;
      })
    );
  }
}
