import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UserComponent } from './users/user/user.component';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import {FormsModule} from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CandeactiveGuard } from './servers/edit-server/can-deactive-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/serverresolver.service';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    HomeComponent,
    ServerComponent,
    EditServerComponent,
    UserComponent,
    UsersComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [CandeactiveGuard,],
  bootstrap: [AppComponent]
})
export class AppModule { }
