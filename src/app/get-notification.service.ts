import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetNotificationService {

  constructor(private http:HttpClient) { }
  getNotifications()
  {
    let url="https://raw.githubusercontent.com/shivshankarsuthar/angularjs/master/dummy.json";
    return this.http.get<[]>(url);
  }
}
