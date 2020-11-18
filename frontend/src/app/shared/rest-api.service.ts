import { Note } from './Note';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

  }

  read(): Observable<Note>{
    return this.http.get<Note>(this.apiUrl + '/notes') 
  }

  create(note): Observable<Note>{
    return this.http.post<Note>(this.apiUrl + '/notes', JSON.stringify(note), this.httpOptions)
    
  }
    
  getById(id:number){
  const url = `${this.apiUrl}/notes/${id}`
  return this.http.get<Note>(url) 
  }

  update(id, note): Observable<Note>{
    return this.http.put<Note>(this.apiUrl + '/notes/' + id, JSON.stringify(note), this.httpOptions)

  }

  delete(id: number): Observable<Note>{
    return this.http.delete<Note>(this.apiUrl + '/notes/' + id, this.httpOptions) 
  }
}
 
