import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({providedIn: 'root'})
export class BackendService {
  constructor(private http: HttpClient) {}

  getMessage(): Observable<string> {
    return this.http.get(`${environment.apiUrl}/api/message`, {responseType: 'text'});
  }

}
