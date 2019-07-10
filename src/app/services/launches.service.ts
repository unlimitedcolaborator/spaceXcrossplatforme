import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Launches} from '../Models/launches.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {
  private readonly apiBaseUrl: string;
  
  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getLaunches(): Observable<Launches[]> {
    const requestEndpoint = this.apiBaseUrl + 'launches';
    return this.http.get<Launches[]>(requestEndpoint).pipe(
      // finalize(() => this.loader.stop()),
      map(Launches => {
        console.log(Launches);
        return Launches;
      })
    );
  }
}
