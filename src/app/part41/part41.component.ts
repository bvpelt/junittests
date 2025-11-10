import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { NgIf, NgClass } from "@angular/common";

@Component({
  selector: "app-part41",
  imports: [NgClass, NgIf, ReactiveFormsModule],
  templateUrl: "./part41.component.html",
  styleUrl: "./part41.component.css",
})
export class Part41Component implements OnInit {
  title = "Part41";
  ref = "";
  registerForm: FormGroup;
  submitted: boolean = false;
  submittedMsg: string = "";

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group(
      {
        title: ["", Validators.required],
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
      },
      { validator: this.MustMatch("password", "confirmPassword") }
    );
  }

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;

    /*
    this.registerForm = this.formBuilder.group(
      {
        title: ["", Validators.required],
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
      },
      { validator: this.MustMatch("password", "confirmPassword") }
    );
    */
  }

  get frmRegistration() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    this.submittedMsg =
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4);
    alert(this.submitted);
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
