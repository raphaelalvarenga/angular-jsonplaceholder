import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/assets/interfaces/post.interface';

const api = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(`${api}/posts`);
  }
}
