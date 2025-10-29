import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part08Component } from "./part08.component";

describe("Part08Component", () => {
  let component: Part08Component;
  let fixture: ComponentFixture<Part08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part08Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("ToBe vs ToEqual string", () => {
    var a = "hello";
    var b = "hello";
    expect(a).toBe(b); // passes because both have the same string
    expect(a).toEqual(b); // passes because both have the same string
  });

  it("ToBe vs ToEqual number", () => {
    var a = 3;
    var b = 3;
    expect(a).toBe(b); // passes because both are the same number
    expect(a).toEqual(b); // passes because both are the same number
  });

  xit("ToBe vs ToEqual array toBe", () => {
    var a = ["1"];
    var b = ["1"];
    expect(a).toBe(b); // fails because ToBe only works for primitive types
  });

  it("ToBe vs ToEqual array toEqual", () => {
    var a = ["1"];
    var b = ["1"];
    expect(a).toEqual(b); // passes
  });

  it("ToBeFalse", () => {
    var a = true;
    var b = ["1"];
    var c = ["1"];

    //expect(a).toBeFalse(); // fails
    expect(!a).toBeFalse(); // passes
    expect(a).toBe(!false); // passes
  });
});
