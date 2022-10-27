import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostsComponent } from "./posts/posts.component";
import { CommentsComponent } from "./comments/comments.component";
import { AlbumsComponent } from "./albums/albums.component";
import { PhotosComponent } from "./photos/photos.component";
import { UsersComponent } from "./users/users.component";
import { HttpClientModule } from "@angular/common/http";
import { UserComponent } from './user/user.component';

@NgModule({
    declarations: [
        AppComponent,
        PostsComponent,
        CommentsComponent,
        AlbumsComponent,
        PhotosComponent,
        UsersComponent,
        UserComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
