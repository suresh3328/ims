import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClent:HttpClient) { }
      
  login(data:any):Observable<any>{
    return this ._httpClent.post('https://reqres.in/api/login', data)
  }
}
