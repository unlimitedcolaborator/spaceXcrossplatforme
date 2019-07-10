import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {InfoApi} from '../Models/infoApi.model';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private readonly apiBaseUrl: string;
  
  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getInfoApi(): Observable<InfoApi[]> {
    const requestEndpoint = this.apiBaseUrl;
    return this.http.get<InfoApi[]>(requestEndpoint).pipe(
      // finalize(() => this.loader.stop()),
      map(InfoApi => {
        console.log(InfoApi);
        return InfoApi;
      })
    );
  }
}
