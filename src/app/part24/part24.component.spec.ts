import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Part24Component } from "./part24.component";

describe("Part24Component", () => {
  let component: Part24Component;
  let fixture: ComponentFixture<Part24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("ngClass testcase for paragraph", () => {
    const element: HTMLElement =
      fixture.debugElement.nativeElement.querySelector("#header");
    expect(element.getAttribute("class")).toContain("font-red");
  });

  it("ngClass testcase for h1", () => {
    const element: HTMLElement =
      fixture.debugElement.nativeElement.querySelector("#header1");
    expect(element.getAttribute("class")).toContain("font-blue");

    component.num = 5;
    fixture.detectChanges();

    expect(element.getAttribute("class")).toContain("font-red");

    component.num = 10;
    fixture.detectChanges();

    expect(element.getAttribute("class")).toContain("font-red");
  });

  it("ngClass testcase for paragraph style", () => {
    const element: HTMLElement =
      fixture.debugElement.nativeElement.querySelector("#styleheader");
    expect(element.getAttribute("style")).toContain("color: black;");
  });
});
