import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { Part41Component } from "./part41.component";
import { By } from "@angular/platform-browser";

describe("Part41Component", () => {
  let component: Part41Component;
  let fixture: ComponentFixture<Part41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part41Component, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Part41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Reactive form validation - firstName empty", () => {
    let firstName = component.registerForm.controls.firstName;
    expect(firstName.valid).toBeFalsy();
    expect(firstName.errors!["required"]).toBeTruthy();
  });

  it("Reactive form validation - firstName with value", () => {
    let firstName = component.registerForm.controls.firstName;
    firstName.setValue("firstName");
    expect(firstName.valid).toBeTruthy();
    expect(firstName.value).toEqual("firstName");
  });

  it("Reactive form validation - lastName empty", () => {
    let lastName = component.registerForm.controls.lastName;
    expect(lastName.valid).toBeFalsy();
    expect(lastName.errors!["required"]).toBeTruthy();
  });

  it("Reactive form validation - lastName with value", () => {
    let lastName = component.registerForm.controls.lastName;
    lastName.setValue("lastName");
    expect(lastName.valid).toBeTruthy();
    expect(lastName.value).toEqual("lastName");
  });

  it("Reactive form validation - email empty", () => {
    let email = component.registerForm.controls.email;
    expect(email.valid).toBeFalsy();
    expect(email.errors!["required"]).toBeTruthy();
  });

  it("Reactive form validation - email invalid", () => {
    let email = component.registerForm.controls.email;
    email.setValue("emailAdres");
    expect(email.valid).toBeFalsy();
    expect(email.errors!["email"]).toBeTruthy();
  });

  it("Reactive form validation - email valid", () => {
    let email = component.registerForm.controls.email;
    email.setValue("emailAdres@gmail.com");
    expect(email.valid).toBeTrue();
    expect(email.errors).toBeNull();
  });

  it("Reactive form validation - submit check", () => {
    expect(component.registerForm.invalid).toBeTruthy();
    let btn = fixture.debugElement.query(By.css("input[type=submit]"));

    component.registerForm.controls["title"].setValue("mr");
    component.registerForm.controls["firstName"].setValue("firstName");
    component.registerForm.controls["lastName"].setValue("lastName");
    component.registerForm.controls["email"].setValue("email@gmail.com");
    component.registerForm.controls["password"].setValue("123456");
    component.registerForm.controls["confirmPassword"].setValue("123456");

    component.onSubmit();
    fixture.detectChanges();

    expect(component.submittedMsg).toEqual(
      "SUCCESS!! :-)\n\n" +
        JSON.stringify(component.registerForm.value, null, 4)
    );
  });
});
