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

  xit("Check multiply negative number", () => {
    let a = -2;
    let b = -3;
    expect(multiply(a, b)).toEqual(6);
  });

  it("Check divide", () => {
    let a = 2;
    let b = 3;
    expect(divide(a, b)).toEqual(0.6666666666666666);
  });
});
