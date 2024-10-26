import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class BackendService {
  constructor(private http: HttpClient) {}

  getMessage(): Observable<string> {
    return this.http.get('https://my-website-30.el.r.appspot.com/api/message', {responseType: 'text'});
  }

}
