import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part26Component } from "./part26.component";

describe("Part26Component", () => {
  let component: Part26Component;
  let fixture: ComponentFixture<Part26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Table colspan attribute test", () => {
    const element: HTMLTableElement =
      fixture.debugElement.nativeElement.querySelector("#colId");

    expect(element.getAttribute("colspan")).toEqual(
      component.columnSpan.toString()
    );
  });

  it("Button attribute test", () => {
    const element: HTMLButtonElement =
      fixture.debugElement.nativeElement.querySelector("#buttonid");

    expect(element.getAttribute("aria-label")).toEqual(
      component.ariaLabel.toString()
    );
  });
});
