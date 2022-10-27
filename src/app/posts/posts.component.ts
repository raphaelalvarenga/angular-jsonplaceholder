import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/assets/interfaces/post.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]> | null = null;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.posts$ = this.api.getPosts();
  }
}
