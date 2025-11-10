import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing";

import { Part39Component } from "./part39.component";
import { StudentService } from "./student.service";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { of } from "rxjs";
import { PostModel } from "./post.model";

describe("Part39Component", () => {
  let component: Part39Component;
  let fixture: ComponentFixture<Part39Component>;
  let service: StudentService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part39Component],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Part39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(StudentService);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Unit test for subscribe", fakeAsync(() => {
    let spy = spyOn(service, "getListOfData").and.returnValue(of([]));
    let subSpy = spyOn(service.getListOfData(), "subscribe");

    component.ngOnInit();
    tick();

    expect(spy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled();
  }));

  it("Unit test for result subscribe", fakeAsync(() => {
    // 1. Define your mock data
    const testpost: PostModel[] = [
      { userId: 1, id: 1, title: "title 1", body: "body1" },
      { userId: 1, id: 2, title: "title 2", body: "body2" },
    ];

    let spy = spyOn(service, "getListOfData").and.returnValue(of(testpost));
    component.ngOnInit();
    tick();
    expect(component.postData).toBeDefined();
    expect(component.postData.length).toEqual(2);
  }));
});
