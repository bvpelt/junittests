import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part23Component } from "./part23.component";

describe("Part23Component", () => {
  let component: Part23Component;
  let fixture: ComponentFixture<Part23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Interpolation test", () => {
    const name: HTMLElement =
      fixture.debugElement.nativeElement.querySelector("#name");
    expect(name.innerHTML).toBe(component.name);

    // change component name and reflect the changes
    component.name = "name updated";
    fixture.detectChanges(); // Essential to reflect the changes in the template
    expect(name.innerHTML).toBe(component.name);
  });

  it("Interpolation for textbox", () => {
    const inputval: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector("#usenum");
    expect(inputval.type).toBe(component.type);
    expect(inputval.placeholder).toBe(component.placeholder);

    // change component type and placeholder and reflect the changes
    component.type = "text";
    component.placeholder = "Enter text here";
    fixture.detectChanges(); // Essential to reflect the changes in the template
    expect(inputval.type).toEqual(component.type);
    expect(inputval.placeholder).toEqual(component.placeholder);

    expect(inputval.readOnly).toBeFalsy();
    expect(inputval.readOnly).toBe(component.userreadonly);
  });
});
