import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PartiesDataService } from './parties-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PartiesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
