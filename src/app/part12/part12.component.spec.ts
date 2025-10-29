import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part12Component } from "./part12.component";

describe("Part12Component", () => {
  let component: Part12Component;
  let fixture: ComponentFixture<Part12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("toBeDefined", () => {
    var a = "hello";
    var b;
    var c = { foo: "bar" };
    var d = (function () {})();
    var e = (function () {
      return 1;
    })();
    expect("This is a defined string").toBeDefined(); // passes
    expect(a).toBeDefined(); // passes
    // expect(b).toBeDefined(); // fails
    expect(b).not.toBeDefined(); // passes
    expect(c).toBeDefined(); // passes
    expect(c.foo).toBeDefined(); // passes
    expect(d).not.toBeDefined(); // passes
    expect(e).toBeDefined(); // passes
  });

  it("toBeUndefined", () => {
    var a = "hello";
    var b;
    var c = { foo: "bar" };
    var d = (function () {})();
    var e = (function () {
      return 1;
    })();
    // expect(a).toBeUndefined(); // fails
    expect(a).not.toBeUndefined(); // passes
    expect(b).toBeUndefined(); // passes
    // expect(c.foo).toBeUndefined(); // fails
    expect(c.foo).not.toBeUndefined(); // passes
    expect(d).toBeUndefined(); // passes
    // expect(e).toBeUndefined(); // fails
    expect(e).not.toBeUndefined(); // passes
  });
});
