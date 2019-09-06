import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuServiceService } from './menu-service.service';
import { UserDetailsComponent } from './header/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserDetailsComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MenuServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
