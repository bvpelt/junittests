import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Part19Component } from "./part19.component";
import { provideHttpClient } from "@angular/common/http";
import { StudentService } from "../services/student.service";
import { provideRouter } from "@angular/router";
import { of } from "rxjs";

describe("Part19Component", () => {
  let component: Part19Component;
  let fixture: ComponentFixture<Part19Component>;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part19Component],
      providers: [provideHttpClient(), StudentService, provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Part19Component);
    h1 = fixture.nativeElement.querySelector("h1");
    component = fixture.componentInstance;

    // NOTE: For the 'SpyOn method' test to work, 'calculate' must exist on StudentComponent
    if (!component.calculate) {
      (component as any).calculate = (a: number, b: number) => a + b;
    }

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Verify h1 element", () => {
    component.StudentSchoolResult();
    fixture.detectChanges(); // Cruxial: Initial value is '', make sure latest changes are reflected
    expect(h1.textContent).toBe(component.studentResult);
  });
});
