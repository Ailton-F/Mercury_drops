import { Injectable } from '@angular/core';
import { User } from '../User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private _api_url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  remove(id: number){
    return this.http.delete<User>(`${this._api_url}/users/${id}`);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this._api_url + '/users')
  }

  userById(id: number): Observable<User>{
    return this.http.get<User>(`${this._api_url}/users/${id}`)
  }
}
