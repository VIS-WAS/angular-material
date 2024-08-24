import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import { MaterialModule } from './material/material.module';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { MatCardComponent } from './mat-card/mat-card.component';
import { MatSliderComponent } from './mat-slider/mat-slider.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormDesignComponent } from './form-design/form-design.component';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';
import { PostsComponent } from './posts/posts.component';
import { PostDialogComponent } from './post-dialog/post-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    AutocompleteComponent,
    MenubarComponent,
    HomeComponent,
    MatCardComponent,
    MatSliderComponent,
    MatTableComponent,
    FormDesignComponent,
    MatDialogComponent,
    PostsComponent,
    PostDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
