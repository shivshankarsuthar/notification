import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponentComponent } from './alert-component/alert-component.component';
import { HttpClientModule } from  '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    JwPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
