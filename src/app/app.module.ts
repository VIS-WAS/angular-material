import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import { MaterialModule } from './material/material.module';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { MatCardComponent } from './mat-card/mat-card.component';

@NgModule({
  declarations: [AppComponent, InputComponent, AutocompleteComponent, MenubarComponent, HomeComponent, MatCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
