import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part09Component } from "./part09.component";

describe("Part09Component", () => {
  let component: Part09Component;
  let fixture: ComponentFixture<Part09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part09Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("ToBeTrue", () => {
    var a = true;
    var b = ["1"];
    var c = ["1"];
    // expect(a).toEqual(b); // does not compile
    expect(a).toBeTrue(); // passes
    expect(a).toBe(true); // passes
    expect(b === b).toBeTrue(); // passes same reference
    //expect(b === c).toBeTrue(); // fails because different references
  });

  it("ToBeFalse", () => {
    var a = true;
    var b = ["1"];
    var c = ["1"];

    //expect(a).toBeFalse(); // fails
    expect(!a).toBeFalse(); // passes
    expect(a).toBe(!false); // passes
  });

  it("ToBeTruthy true", () => {
    var a = true;
    expect(a).toBeTruthy(); // passes
  });

  xit("ToBeTruthy undefined", () => {
    var a = undefined;
    expect(a).toBeTruthy(); // fails
  });

  it("ToBeFalsy undefined", () => {
    var a = undefined;
    expect(a).toBeFalsy(); // passes
  });

  xit("ToBeFalse undefined", () => {
    var a = undefined;
    expect(a).toBeFalse(); // fails
  });
});
