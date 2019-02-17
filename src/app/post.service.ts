import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getAllPosts() {
    return  this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getLatestPosts() {
    return  this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getOnePost(id: number) {
    return  this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }

}
