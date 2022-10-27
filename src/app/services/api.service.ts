import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Comment } from "src/assets/interfaces/comment.interface";
import { Post } from "src/assets/interfaces/post.interface";

const api = "https://jsonplaceholder.typicode.com";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    constructor(private http: HttpClient) {}

    getPosts() {
        return this.http.get<Post[]>(`${api}/posts`);
    }

    getComments() {
        return this.http.get<Comment[]>(`${api}/comments`);
    }
}
