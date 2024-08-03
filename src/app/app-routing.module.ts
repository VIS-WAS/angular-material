import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'input',
    component: InputComponent,
  },

  { path: 'autocomplete', component: AutocompleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
