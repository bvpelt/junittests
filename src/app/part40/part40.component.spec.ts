import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part40Component } from "./part40.component";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { of } from "rxjs";
import { PostModel } from "./post.model";

describe("Part40Component", () => {
  let component: Part40Component;
  let fixture: ComponentFixture<Part40Component>;

  let objCreateSpy: any;
  let objCreateObjSpy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part40Component],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Part40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();

    objCreateSpy = jasmine.createSpy("fetchData");
    objCreateSpy("this is for createSpy unit test");

    objCreateObjSpy = jasmine.createSpyObj("fetchSpyObj", ["add", "substract"]);
    objCreateObjSpy.add();
    objCreateObjSpy.substract();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("unit test for createSpy", () => {
    expect(objCreateSpy).toBeDefined();
    expect(objCreateSpy).toHaveBeenCalled();
    expect(objCreateSpy.calls.count()).toEqual(1);
  });

  it("unit test for createObjSpy", () => {
    expect(objCreateObjSpy).toBeDefined();
    expect(objCreateObjSpy.add).toHaveBeenCalled();
    expect(objCreateObjSpy.add.calls.count()).toEqual(1);
     expect(objCreateObjSpy.substract).toHaveBeenCalled();
    expect(objCreateObjSpy.substract.calls.count()).toEqual(1);
  });
});
