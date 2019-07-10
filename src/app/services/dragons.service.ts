import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Dragons} from '../Models/dragons.model';

@Injectable({
  providedIn: 'root'
})
export class DragonsService {

  private readonly apiBaseUrl: string;
  
  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getDragons(): Observable<Dragons[]> {
    const requestEndpoint = this.apiBaseUrl + 'Dragons';
    return this.http.get<Dragons[]>(requestEndpoint).pipe(
      // finalize(() => this.loader.stop()),
      map(Dragons => {
        console.log(Dragons);
        return Dragons;
      })
    );
  }
}
