import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostsComponent } from "./pages/posts/posts.component";
import { CommentsComponent } from "./pages/comments/comments.component";
import { AlbumsComponent } from "./pages/albums/albums.component";
import { PhotosComponent } from "./pages/photos/photos.component";
import { UsersComponent } from "./pages/users/users.component";
import { HttpClientModule } from "@angular/common/http";
import { UserComponent } from "./pages/user/user.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NewUserComponent } from "./pages/new-user/new-user.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        PostsComponent,
        CommentsComponent,
        AlbumsComponent,
        PhotosComponent,
        UsersComponent,
        UserComponent,
        NavbarComponent,
        NewUserComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
