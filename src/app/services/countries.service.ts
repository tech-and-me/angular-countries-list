import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { map, Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _httpClient:HttpClient) { }
  public fetchCountries():Observable<any>{
  return this._httpClient.get("https://restcountries.com/v3.1/all");
  }  
}
