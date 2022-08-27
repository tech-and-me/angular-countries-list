import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountriesService } from './services/countries.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
