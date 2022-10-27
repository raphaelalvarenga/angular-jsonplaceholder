import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Author } from "src/assets/interfaces/author.interface";
import { ApiService } from "../services/api.service";

@Component({
    selector: "app-users",
    templateUrl: "./users.component.html",
    styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
    authors$: Observable<Author[]> | null = null;

    constructor(private api: ApiService) {}

    ngOnInit(): void {
        this.authors$ = this.api.getAuthors();
    }
}
