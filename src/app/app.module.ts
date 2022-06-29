import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OperatorsModule } from './operators/operators.module';

const routes: Routes = []

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), OperatorsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
