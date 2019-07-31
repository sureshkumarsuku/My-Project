import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListToDoComponent } from './list-to-do/list-to-do.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    ListToDoComponent,
    AddToDoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
