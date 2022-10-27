import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlbumsComponent } from "./pages/albums/albums.component";
import { CommentsComponent } from "./pages/comments/comments.component";
import { PhotosComponent } from "./pages/photos/photos.component";
import { PostsComponent } from "./pages/posts/posts.component";
import { UserComponent } from "./pages/user/user.component";
import { UsersComponent } from "./pages/users/users.component";

const routes: Routes = [
    { path: "albums", component: AlbumsComponent },
    { path: "comments", component: CommentsComponent },
    { path: "photos", component: PhotosComponent },
    { path: "", component: PostsComponent },
    { path: "users/:id", component: UserComponent },
    { path: "users", component: UsersComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
