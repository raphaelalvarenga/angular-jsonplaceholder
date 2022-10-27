import { Component, OnInit } from "@angular/core";
import { forkJoin, Observable } from "rxjs";
import { Post } from "src/assets/interfaces/post.interface";
import { ApiService } from "../../services/api.service";

@Component({
    selector: "app-posts",
    templateUrl: "./posts.component.html",
    styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
    posts: Post[] = [];

    constructor(private api: ApiService) {}

    ngOnInit(): void {
        forkJoin({
            posts: this.api.getPosts(),
            comments: this.api.getComments(),
            authors: this.api.getAuthors(),
        }).subscribe({
            next: ({ posts, comments, authors }) => {
                this.posts = posts.map((post) => ({
                    ...post,
                    comments: comments.filter(
                        ({ postId }) => postId === post.id
                    ),
                    userName: authors.find(
                        (author) => author.id === post.userId
                    )!.name,
                }));
            },
            error: (error) => console.log(error),
        });
    }
}
