import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Payloads} from '../Models/payloads.model';

@Injectable({
  providedIn: 'root'
})
export class PayloadsService {
  private readonly apiBaseUrl: string;
  
  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getPayloads(): Observable<Payloads[]> {
    const requestEndpoint = this.apiBaseUrl + 'Payloads';
    return this.http.get<Payloads[]>(requestEndpoint).pipe(
      // finalize(() => this.loader.stop()),
      map(Payloads => {
        console.log(Payloads);
        return Payloads;
      })
    );
  }
}
