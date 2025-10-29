import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part11Component } from "./part11.component";

describe("Part11Component", () => {
  let component: Part11Component;
  let fixture: ComponentFixture<Part11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("toMatch example 1", () => {
    var a = "Hello, World!";
    expect(a).toMatch(/World/); // passes
    // expect(a).toMatch(/world/); // fails case sensitive
    expect(a).toMatch(/world/i);
  });

  it("toMatch example 2", () => {
    var a = "001-789-56-34";
    expect(a).toMatch(/^\d{3}-\d{3}-\d{2}-\d{2}$/); // passes
    //expect(a).toMatch(/^\d{3}-\d{3}-\d{2}$/); // fails - missing -\d{2} at the end
    expect(a).not.toMatch(/^\d{3}-\d{3}-\d{2}$/); // passes - negated
    expect(a).toMatch(/^\d{3}-\d{3}-\d{2}/); // passes - partial match
  });

  it("toBeCloseTo", () => {
    var pi = 3.14159265359;
    expect(pi).toBeCloseTo(3.14, 2); // passes
    expect(pi).toBeCloseTo(3.1416, 4); // passes
    expect(pi).not.toBeCloseTo(3.14159, 6); // fails
    //expect(pi).toBeCloseTo(3.14159, 6); // fails
  });
});
