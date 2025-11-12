import {
  Component,
  OnInit,
  ChangeDetectionStrategy, 
} from "@angular/core";
import {
  AbstractControl,
  NonNullableFormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
  ValidatorFn,
  ValidationErrors,
} from "@angular/forms";

import { CommonModule } from "@angular/common";

@Component({
  selector: "app-part41",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./part41.component.html",
  styleUrl: "./part41.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Part41Component implements OnInit {
  title = "Part41";
  ref = "";

  registerForm: FormGroup<{
    title: FormControl<string>;
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
    confirmPassword: FormControl<string>;
  }>;

  submitted: boolean = false;
  submittedMsg: string = "";

  constructor(private fb: NonNullableFormBuilder) {
    this.registerForm = this.fb.group(
      {
        title: ["", Validators.required],
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
      },
      { validators: this.MustMatch("password", "confirmPassword") }
    );
  }

  ngOnInit(): void {
    let part = this.title.toLowerCase();
    this.ref = `https://github.com/bvpelt/junittests/blob/main/src/app/${part}/${part}.component.spec.ts`;
  }

  // A helper getter makes the template cleaner
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    this.registerForm.markAllAsTouched(); // to force validation!!

    if (this.registerForm.invalid) {
      return;
    }

    this.submittedMsg =
      "SUCCESS!! :-)\n\n" +
      JSON.stringify(this.registerForm.getRawValue(), null, 4);

    alert(this.submittedMsg);
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  MustMatch(controlName: string, matchingControlName: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const control = formGroup.get(controlName);
      const matchingControl = formGroup.get(matchingControlName);

      if (!control || !matchingControl) {
        return null;
      }

      if (matchingControl.errors && !matchingControl.errors["mustMatch"]) {
        return null;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
      return null;
    };
  }
}
