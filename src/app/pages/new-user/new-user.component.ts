import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import { Author } from "src/assets/interfaces/author.interface";

@Component({
    selector: "app-new-user",
    templateUrl: "./new-user.component.html",
    styleUrls: ["./new-user.component.scss"],
})
export class NewUserComponent implements OnInit {
    userForm = this.fb.group({
        name: ["", Validators.required],
        username: ["", Validators.required],
        email: ["", Validators.required],
        address: this.fb.group({
            street: ["", Validators.required],
            suite: ["", Validators.required],
            city: ["", Validators.required],
            zipcode: ["", Validators.required],
            geo: this.fb.group({
                lat: ["", Validators.required],
                lng: ["", Validators.required],
            }),
        }),
        phone: ["", Validators.required],
        website: ["", Validators.required],
        company: ["", Validators.required],
    });

    constructor(
        private fb: FormBuilder,
        private api: ApiService,
        private router: Router
    ) {}

    ngOnInit(): void {}

    saveAuthor() {
        const newAuthor: Author = {
            id: 0,
            name: this.userForm.value.name as string,
            email: this.userForm.value.email as string,
            username: this.userForm.value.username as string,
            phone: this.userForm.value.phone as string,
            company: {
                bs: "",
                catchPhrase: "",
                name: this.userForm.value.company as string,
            },
            website: this.userForm.value.website as string,
            address: {
                street: this.userForm.value.address?.street as string,
                city: this.userForm.value.address?.city as string,
                suite: this.userForm.value.address?.suite as string,
                zipcode: this.userForm.value.address?.zipcode as string,
                geo: {
                    lat: this.userForm.value.address?.geo?.lat as string,
                    lng: this.userForm.value.address?.geo?.lng as string,
                },
            },
        };
        this.api.postAuthor(newAuthor).subscribe({
            next: (v) => {
                this.router.navigateByUrl("/users");
            },
            error: (e) => console.log(e),
        });
    }
}
