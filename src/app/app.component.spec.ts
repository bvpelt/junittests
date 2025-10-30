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

});
