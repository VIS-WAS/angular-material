import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './home/home.component';
import { MatCardComponent } from './mat-card/mat-card.component';
import { MatSliderComponent } from './mat-slider/mat-slider.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { FormDesignComponent } from './form-design/form-design.component';
import { PostsComponent } from './posts/posts.component';
import { AssociateComponent } from './associate/associate.component';

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
  { path: 'card', component: MatCardComponent },
  { path: 'slider', component: MatSliderComponent },
  {
    path: 'table',
    component: MatTableComponent,
  },
  {
    path: 'forms',
    component: FormDesignComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'associate',
    component: AssociateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
