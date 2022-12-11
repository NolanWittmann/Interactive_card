import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonPageHeaderComponent } from './common-page-header/common-page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonPageHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
