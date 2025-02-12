import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/register/`, user);
  }
}


