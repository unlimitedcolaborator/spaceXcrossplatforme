import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Capsules} from '../Models/capsules.model';

@Injectable({
  providedIn: 'root'
})
export class CapsuleService {
  private readonly apiBaseUrl: string;
  
  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getCapsules(): Observable<Capsules[]> {
    const requestEndpoint = this.apiBaseUrl + 'Capsules';
    return this.http.get<Capsules[]>(requestEndpoint).pipe(
      // finalize(() => this.loader.stop()),
      map(Capsules => {
        console.log(Capsules);
        return Capsules;
      })
    );
  }
}
