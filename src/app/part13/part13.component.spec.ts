import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part13Component } from "./part13.component";

describe("Part13Component", () => {
  let component: Part13Component;
  let fixture: ComponentFixture<Part13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("toBeNull", () => {
    var a = null;
    var b = "hello";
    // expect(b).toBeNull(); // fails
    expect(b).not.toBeNull(); // passes
    expect(a).toBeNull(); // passes
  });

  it("toBeNaN", () => {
    var a = NaN;
    var b = "hello";
    var c = 123;
    expect(0 / 0).toBeNaN(); // passes
    expect(0 / 5).not.toBeNaN(); // passes
    expect(a).toBeNaN(); // passes
    // expect(b).toBeNaN(); // fails
    expect(b).not.toBeNaN(); // passes
    // expect(c).toBeNaN(); // fails
    expect(c).not.toBeNaN(); // passes
  });

  it("toContain", () => {
    var arr = [1, 2, 3, 4, 5];
    var str = "Hello, World!";
    expect(arr).toContain(3); // passes
    // expect(arr).toContain(6); // fails
    expect(arr).not.toContain(6); // passes
    expect(str).toContain("World"); // passes
    // expect(str).toContain("world"); // fails
    expect(str).not.toContain("world"); // passes
  });

  it("toBePositiveInfinite", () => {
    var a = Infinity;
    var b = -Infinity;
    var c = 123;
    expect(1 / 0).toBePositiveInfinity(); // passes
    expect(-1 / 0).not.toBePositiveInfinity(); // passes
    expect(a / 0).toBePositiveInfinity(); // passes
    expect(a / a).not.toBePositiveInfinity(); // passes NaN case
    expect(a / b).not.toBePositiveInfinity(); // passes -1 case
    expect(a).toBePositiveInfinity(); // passes
    // expect(b).toBePositiveInfinity(); // fails
    expect(b).not.toBePositiveInfinity(); // passes
    // expect(c).toBePositiveInfinity(); // fails
    expect(c).not.toBePositiveInfinity(); // passes
  });

  it("toBeNegativeInfinite", () => {
    var a = Infinity;
    var b = -Infinity;
    var c = -123;
    // expect(a).toBeNegativeInfinity(); // fails
    expect(a).not.toBeNegativeInfinity(); // passes
    expect(b).toBeNegativeInfinity(); // passes
    // expect(c).toBeNegativeInfinity(); // fails
    expect(c).not.toBeNegativeInfinity(); // passes
  });
});
