import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

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

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {}
}
