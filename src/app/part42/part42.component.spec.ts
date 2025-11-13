import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from "@angular/core/testing";

import { Part42Component } from "./part42.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { By } from "@angular/platform-browser";

describe("Part42Component", () => {
  let component: Part42Component;
  let fixture: ComponentFixture<Part42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part42Component, FormsModule, CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Part42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Template driven form - Invalid email", fakeAsync(() => {
    // Wait for the component/template initialization to fully settle
    tick();

    let email = component.loginForm.form.controls["usermail1"];

    expect(email.invalid).toBeTruthy();

    expect(email.touched).toBeFalse();
    expect(email.errors).toBeDefined();

    expect(email.errors!["required"]).toBeTrue();
  }));

  it("Template driven form - Valid email", fakeAsync(() => {
    // Wait for the component/template initialization to fully settle
    tick();

    let email = component.loginForm.form.controls["usermail1"];
    email.setValue("email@mail.com");

    expect(email.valid).toBeTruthy();
  }));

  it("Template driven form - Form submit", fakeAsync(() => {
    // Wait for the component/template initialization to fully settle
    tick();

    let btn = fixture.debugElement.query(By.css("input[type=submit]"));

    component.loginForm.form.controls["usermail1"].setValue(
      "dotnetoffice@gmail.com"
    );
    component.loginForm.form.controls["password"].setValue("123456");

    component.onFormSubmit();

    fixture.detectChanges();
    expect(component.submitMsg).toEqual(
      "Login Details" + JSON.stringify(component.model, null, 4)
    );
  }));
});
