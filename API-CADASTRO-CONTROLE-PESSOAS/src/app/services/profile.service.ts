import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  api = "http://localhost:3000/profiles"
  constructor(private http: HttpClient) { }
  
  buscarTodos(){
return this.http.get(this.api);

  }
}
