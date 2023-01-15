import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { ButtonGroupsComponent } from './button-groups/button-groups.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ExamplesComponent } from './examples/examples.component';

const routes: Routes = [
  {path: 'examples', component: ExamplesComponent},
  {path: 'buttons', component: ButtonsComponent},
  {path: 'button-groups', component: ButtonGroupsComponent},
  {path: '', redirectTo: '/examples', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

