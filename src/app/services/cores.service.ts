import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Cores} from '../Models/cores.model';

@Injectable({
  providedIn: 'root'
})
export class CoresService {
  private readonly apiBaseUrl: string;
  
  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }
  getCores(): Observable<Cores[]> {
    const requestEndpoint = this.apiBaseUrl + 'Cores';
    return this.http.get<Cores[]>(requestEndpoint).pipe(
      // finalize(() => this.loader.stop()),
      map(Cores => {
        console.log(Cores);
        return Cores;
      })
    );
  }
}
