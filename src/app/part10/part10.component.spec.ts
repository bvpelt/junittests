import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part10Component } from "./part10.component";

describe("Part10Component", () => {
  let component: Part10Component;
  let fixture: ComponentFixture<Part10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("ToBeGreaterThan", () => {
    var a = 5;
    expect(a).toBeGreaterThan(3); // passes
    // expect(a).toBeGreaterThan(5); // fails
  });

  it("ToBeLessThan", () => {
    var a = 5;
    expect(a).toBeLessThan(7); // passes
    // expect(a).toBeLessThan(5); // fails
  });

  it("ToBeGreaterThanOrEqual", () => {
    var a = 5;
    expect(a).toBeGreaterThanOrEqual(5); // passes
    // expect(a).toBeGreaterThanOrEqual(6); // fails
  });

  it("ToBeLessThanOrEqual", () => {
    var a = 5;
    expect(a).toBeLessThanOrEqual(7); // passes
    expect(a).toBeLessThanOrEqual(5); // fails
  });
});
