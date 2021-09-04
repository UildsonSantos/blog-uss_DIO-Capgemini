import { Component, OnInit } from '@angular/core';

import { PostService } from './../service/post.service';
import { Post } from './../model/Post';

@Component({
  selector: 'uss-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost: Post[] = [];
  post: Post = new Post;
  name!: string;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPost();
  }

  findPost() {
    this.postService.getPosts().subscribe( data => {
      this.listPost = data;
    })
  }

  pushMessage() {
    this.postService.postMessage(this.post).subscribe( data => {
      this.post = data;
      location.assign('/feed')
    })
  }
}
