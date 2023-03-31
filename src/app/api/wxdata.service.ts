import { Observable, throwError } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WxDataService {
  private apiURI: string = 'https://rt.ambientweather.net/v1/devices';
  private appKey: string = environment.applicationKey;
  private apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) {}

  getCurrentConditions() {
    let URI = this.apiURI + '?apiKey=' + this.apiKey + '&applicationKey=' + this.appKey;
    return this.http.get(URI,
        { 
            observe: 'body',
            responseType: 'json'
        }    
    );
  }

}
