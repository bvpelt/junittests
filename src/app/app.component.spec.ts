import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { add, divide, multiply, subtract } from "./Calculator";

describe("AppComponent", () => {
  let component = new AppComponent();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it("Should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Should have the 'junittests' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("junittests");
  });

  it("Should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("h1")?.textContent).toContain(
      "Hello, junittests"
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

  xit("ToBe vs ToEqual array tobe", () => {
    var a = ["1"];
    var b = ["1"];
    expect(a).toBe(b); // fails because ToBe only works for primitive types
  });

  it("ToBe vs ToEqual array toequal", () => {
    var a = ["1"];
    var b = ["1"];
    expect(a).toEqual(b); // passes
  });
});
