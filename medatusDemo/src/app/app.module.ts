// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MedButtonModule } from 'med-button';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { ButtonGroupsComponent } from './button-groups/button-groups.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ExamplesComponent } from './examples/examples.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ExamplesComponent,
    ButtonsComponent,
    ButtonGroupsComponent,
    HeaderComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MedButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
