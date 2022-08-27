import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  private data:any;
  public objectKeys = Object.keys;
  constructor(private _service:CountriesService) { }

  ngOnInit(): void {
    this._service.fetchCountries().subscribe(res=> this.data = res);
  }

  public getData(){
    return this.data;
  }

 

}
