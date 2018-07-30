import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl="http://localhost:3000/api/category"

  constructor(private http : HttpClient) { }

  getCategory(){
    return this.http.get(this.baseUrl);
  }
}
