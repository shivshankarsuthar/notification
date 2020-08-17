import { Component, OnInit } from '@angular/core';
import {GetNotificationService} from '../get-notification.service';  // a http service which used to fetch json data
import { faExclamationTriangle, faBell } from '@fortawesome/free-solid-svg-icons';  // a warning icon
import { Subscription, timer,interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-alert-component',
  templateUrl: './alert-component.component.html',
  styleUrls: ['./alert-component.component.css']
})



export class AlertComponentComponent {
  warning = faExclamationTriangle;
  bell = faBell;
  pageOfItems: Array<any>;
  alerts = [];
  intervalTime = 30000;
  subscription: Subscription;
  subscription2: Subscription;
  stringified = "";
  oldAlerts = [];
  update = [];
  firstTime = 1;
  missing = [];


  newupdates(){
    this.stringified = JSON.stringify(this.oldAlerts);
    if(this.firstTime)   //loaded function first time
      this.missing = [];
    else{
        this.missing = this.alerts.filter(item => this.stringified.indexOf(JSON.stringify(item)) < 0);
        this.firstTime = 0;
        this.oldAlerts = this.alerts;
        for(var x in this.missing){
          let uniqueString = this.missing[x].message + this.missing[x].date + this.missing[x].time;
          this.update.push(uniqueString);
      }
    }
  }

  constructor(private alert:GetNotificationService) { 

    this.subscription = timer(0, this.intervalTime).pipe(
      switchMap(() => this.alert.getNotifications())
    ).subscribe(result => this.alerts = result);

    this.subscription2 = interval(this.intervalTime).subscribe(val => this.newupdates());
    
}
    

  ngOnInit() {
}


ngOnDestroy() {
    this.oldAlerts = this.alerts;
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
}


  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}




}
