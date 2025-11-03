import { ComponentFixture, inject, TestBed } from "@angular/core/testing";
import { provideHttpClient } from "@angular/common/http";
import { Part33Component } from "./part33.component";
import { StudentService } from "../services/student.service";
import { Injectable } from "@angular/core";

@Injectable()
class MockStudentService extends StudentService {
  public NewSaveMethod() {
    return true;
  }
}

describe("Part33Component", () => {
  let component: Part33Component;
  let fixture: ComponentFixture<Part33Component>;
  let service: StudentService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part33Component],
      providers: [StudentService, provideHttpClient()],
    }).compileComponents();

    // For component Part33Component change StudentService to use MockStudentService
    TestBed.overrideComponent(Part33Component, {                                 // instantiate component
      set: {                                                                     // set providers 
        providers: [{ provide: StudentService, useClass: MockStudentService }],
      },
    });

    fixture = TestBed.createComponent(Part33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(StudentService); // TestBed.get(StudentService) is depricated
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("DI unit test case", () => {
    expect(service instanceof StudentService).toBeTruthy();
  });

  it("DI unit test case using inject", inject(
    [StudentService],
    (instanceService: StudentService) => {
      expect(instanceService).toBeTruthy();
      expect(instanceService instanceof StudentService).toBeTruthy();
    }
  ));

  it("DI Unit test case using override", () => {
    let element = fixture.debugElement.injector.get(StudentService);
    expect(element instanceof MockStudentService).toBeTruthy();
  });
});
