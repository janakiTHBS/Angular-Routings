
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';

interface server {
  id:number;
  name:string;
  status:string;
}
@Injectable({
    providedIn:'root'
})
export class  ServerResolver implements Resolve<{id:number,name:string,status:string}> {
    constructor(private serverService:ServersService){}
resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<server>| Promise<server>| server{
return this.serverService.getServer(+route.params['id']);
}
}