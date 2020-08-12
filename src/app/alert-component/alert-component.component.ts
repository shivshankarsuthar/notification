import { Component, OnInit } from '@angular/core';
import {GetNotificationService} from '../get-notification.service';  // a http service which used to fetch json data
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';  // a warning icon
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-alert-component',
  templateUrl: './alert-component.component.html',
  styleUrls: ['./alert-component.component.css']
})



export class AlertComponentComponent {
  warning = faExclamationTriangle;
  pageOfItems: Array<any>;
  alerts = [];
  interval = 60000;
  subscription: Subscription;
statusText: string;

  constructor(private alert:GetNotificationService) { 
    this.subscription = timer(0, this.interval).pipe(
      switchMap(() => this.alert.getNotifications())
    ).subscribe(result => this.alerts = result);
    console.log(this.alerts);
}
    

  ngOnInit() {
}


ngOnDestroy() {
    this.subscription.unsubscribe();
}


  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}




}
