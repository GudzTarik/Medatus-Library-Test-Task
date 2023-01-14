// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
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
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
