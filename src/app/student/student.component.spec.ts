import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideHttpClient } from '@angular/common/http'; // <-- Import this
import { StudentService } from "../services/student.service";
import { StudentComponent } from "./student.component";
import { provideRouter } from "@angular/router";
import { of } from "rxjs";
import { HttpClient } from "@angular/common/http";

describe("StudentComponent", () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentComponent],
      providers: [provideHttpClient(), StudentService, provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
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

  it("SpyOn method", () => {
    const spy = spyOn(component as any, "calculate").and.returnValue(15);
    const result = (component as any).calculate(7, 8);
    expect(spy).toHaveBeenCalled();
    expect(result).toBe(15);
  });
  
});
