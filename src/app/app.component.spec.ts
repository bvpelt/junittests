import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { add, divide, multiply, subtract } from "./Calculator";
import { provideRouter } from "@angular/router";

describe("AppComponent", () => {
  let component = new AppComponent();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])], 
    }).compileComponents();
  });

  it("Should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Should have the app.title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual(app.title);
  });

  it("Should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("h1")?.textContent).toContain(
      compiled.title
    );
  });

  it("My first test", () => {
    expect(1 + 1).toEqual(2);
  });

  it("Check showMessage()", () => {
    const message = "Hello, World!";
    //    expect(component.showMessage(message)).toEqual('message'); // Wrong test
    expect(component.showMessage(message)).toEqual(message); // Correct test using deep equality
    // expect(component.showMessage(message)).toBe(message) // Correct test using ===
  });

  it("Check add", () => {
    let a = 2;
    let b = 3;
    expect(add(a, b)).toEqual(5);
  });

  it("Check subtract", () => {
    let a = 2;
    let b = 3;
    expect(subtract(a, b)).toEqual(-1);
  });

  it("Check multiply", () => {
    let a = 2;
    let b = 3;
    expect(multiply(a, b)).toEqual(6);
  });

  it("Check multiply negative number", () => {
    let a = -2;
    let b = -3;
    expect(multiply(a, b)).toEqual(6);
  });

  it("Check divide", () => {
    let a = 2;
    let b = 3;
    expect(divide(a, b)).toEqual(0.6666666666666666);
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
    expect(a/0).toBePositiveInfinity(); // passes
    expect(a/a).not.toBePositiveInfinity(); // passes NaN case
    expect(a/b).not.toBePositiveInfinity(); // passes -1 case
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
