import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../../interfaces/messages/post';
@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
