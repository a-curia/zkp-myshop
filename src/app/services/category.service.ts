import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RootObject } from './all.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseurl = 'http://localhost:8080/categoryDetails';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<RootObject>("http://localhost:8080/categoryDetails");
  }
}
