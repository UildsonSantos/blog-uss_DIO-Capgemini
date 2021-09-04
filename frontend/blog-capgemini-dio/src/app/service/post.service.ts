import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './../model/Post';

const urlBase = 'http://localhost:3001/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(urlBase)
  }

  postMessage(post: Post) {
    return this.http.post<Post>(urlBase, post)
  }

}
