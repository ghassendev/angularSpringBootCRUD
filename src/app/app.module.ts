import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArbresComponent } from './arbres/arbres.component';
import { AddArbreComponent } from './add-arbre/add-arbre.component';
import { FormsModule } from '@angular/forms';
import { UpdateArbreComponent } from './update-arbre/update-arbre.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ArbresComponent,
    AddArbreComponent,
    UpdateArbreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
