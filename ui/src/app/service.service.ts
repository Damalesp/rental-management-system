import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {
    this.getJSON();
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/catalog.json");
  }

}