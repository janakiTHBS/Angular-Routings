
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CandeactiveGuard } from './servers/edit-server/can-deactive-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/serverresolver.service';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent,children:[ {path:':id/:name',component:UserComponent},]},
 
  {path:'servers',
  //canActivate:[AuthGuardService],
  canActivateChild:[AuthGuardService],
  component:ServersComponent,children:[
    {path:':id',component:ServerComponent,resolve:{server:ServerResolver}},
    {path:':id/edit',component:EditServerComponent,canDeactivate:[CandeactiveGuard]}
  ]
  },
  //{path:'something',component:PageNotFoundComponent},
  {path:'notfound',component:ErrorPageComponent,data:{message:'page not found'}},
  {path:'**',redirectTo:'/notfound',pathMatch:'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
