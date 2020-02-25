import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
paramSubscription:Subscription;

  user: {id: number, name: string};

  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.user= {
      id:this.activeRoute.snapshot.params['id'],
      name:this.activeRoute.snapshot.params['name']
    };
   this.paramSubscription= this.activeRoute.params.subscribe((params:Params)=>{
        this.user.id=params['id'];
        this.user.name=params['name'];
    });
  }

  ngOnDestroy(){
   this.paramSubscription.unsubscribe();
  }
}
