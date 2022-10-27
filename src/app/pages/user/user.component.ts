import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "src/app/services/api.service";
import { Author } from "src/assets/interfaces/author.interface";

@Component({
    selector: "app-user",
    templateUrl: "./user.component.html",
    styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
    user: Author = {
        address: {
            city: "",
            geo: {
                lat: "",
                lng: "",
            },
            street: "",
            suite: "",
            zipcode: "",
        },
        company: {
            bs: "",
            catchPhrase: "",
            name: "",
        },
        email: "",
        id: 0,
        name: "",
        phone: "",
        username: "",
        website: "",
    };

    constructor(private router: Router, private api: ApiService) {}

    ngOnInit(): void {
        const urlArr = this.router.url.split("/");
        const userId = parseInt(urlArr[urlArr.length - 1]);

        this.api.getAuthor(userId).subscribe({
            next: (user) => {
                this.user = user;
            },

            error: (error) => console.log(error),
        });
    }
}
