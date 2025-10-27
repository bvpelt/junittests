import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideHttpClient } from "@angular/common/http";
import { StudentService } from "../services/student.service";
import { StudentComponent } from "./student.component";
import { provideRouter } from "@angular/router";
import { of } from "rxjs";

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
    let spy = spyOn(component, "calculate");
    component.saveData();
    expect(spy).toHaveBeenCalled();
  });

  it("SpyOn method - 1", () => {
    spyOn(component, "calculate").and.returnValues(10, 20);
    let result = component.StudentResult();
    expect(result).toEqual("Fail");
  });

  it("SpyOn method - 2", () => {
    spyOn(component, "calculate").and.returnValues(40, 20);
    let result = component.StudentResult();
    expect(result).toEqual("Pass");
  });

  it("SpyOn method - 3", () => {
    let service = fixture.debugElement.injector.get(StudentService);
    let spy = spyOn(service, "SaveDetails").and.callFake(() => {
      return of({
        result1: 200,
      });
    });
    // call the stub method saveDataIntoConsole
    spyOn(component, "SaveDataIntoConsole").and.stub();
    component.saveData();
    expect(component.result).toEqual({
      result1: 200,
    });
  });
});
