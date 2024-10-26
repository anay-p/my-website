import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class BackendService {
  constructor(private http: HttpClient) {}

  getMessage(): Observable<string> {
    return this.http.get('http://localhost:8080/api/message', {responseType: 'text'});
  }

}
