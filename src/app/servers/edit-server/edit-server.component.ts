import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactive } from './can-deactive-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanComponentDeactive {
  editAllow=false;
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
changesSaved=false;


  constructor(private serversService: ServersService,
    private activateRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    console.log(this.activateRoute.snapshot.queryParams);
    console.log(this.activateRoute.fragment);
    this.activateRoute.queryParams.subscribe((queryParams:Params)=>{
      this.editAllow=queryParams['allowEdit']==='1'? true: false;
    });
    this.activateRoute.fragment.subscribe();
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved=true;
    this.router.navigate(['../'],{relativeTo:this.activateRoute});
  }

  canDeactive():Observable<boolean>| Promise<boolean>|boolean {
if(!this.editAllow){
  return true;
}
if((this.serverName !== this.serverName ||this.serverStatus !== this.serverStatus ) && !this.changesSaved) {
  return confirm('Do you want to discard changes ');
} else {
  return true;
}
  }
}
