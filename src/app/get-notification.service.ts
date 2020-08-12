import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetNotificationService {

  constructor(private http:HttpClient) { }
  getNotifications()
  {
    let url="https://notifi-cation.herokuapp.com/notification/?format=json";
    return this.http.get<[]>(url);
  }
}
