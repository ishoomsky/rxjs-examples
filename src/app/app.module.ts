import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OperatorsModule } from './operators/operators.module';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = []

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    OperatorsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
