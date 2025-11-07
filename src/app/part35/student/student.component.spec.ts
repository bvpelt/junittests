import { ComponentFixture, TestBed } from "@angular/core/testing";

import { StudentComponent } from "./student.component";
import { Part35Component } from "../part35.component";

describe("StudentComponent", () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let parentComponent: Part35Component;
  let parentFixture: ComponentFixture<Part35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentComponent, Part35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    parentFixture = TestBed.createComponent(Part35Component);
    parentComponent = parentFixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Test input", async () => {
    parentComponent.myInputMsg = "Input directive"; // change input test values
    parentFixture.detectChanges();

    await fixture.whenStable().then(() => {
      let element =
        parentFixture.debugElement.nativeElement.querySelector("h3").innerText;
      expect(element).toEqual("Student component: Input directive");
    });
  });

  it("Test output", async () => {
    component.sendValues();
    parentFixture.detectChanges();

    await parentFixture.whenStable().then(() => {
      component.myOutput.subscribe((msg) => {
        expect(msg).toEqual("Send child data Output from Student");
      });
      component.sendValues();
    });
  });
});
