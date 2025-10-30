import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part27Component } from "./part27.component";

describe("Part27Component", () => {
  let component: Part27Component;
  let fixture: ComponentFixture<Part27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("button1", () => {
    const element: HTMLButtonElement =
      fixture.debugElement.nativeElement.querySelector("#button1");
    expect(component.label).toBe(component.label);

    element.click();
    fixture.detectChanges();

    expect(component.label).toBe("Dotnet Office");
  });

  it("button2", () => {
    const element: HTMLButtonElement =
      fixture.debugElement.nativeElement.querySelector("#button2");
    expect(component.label).toBe(component.label);

    element.click();
    fixture.detectChanges();

    expect(component.label).toBe("label value change on button2");
  });

  it("textbox1", () => {
    const element: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector("#textbox1");
    expect(component.label).toBe(component.label);

    element.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    expect(component.label).toBe("onChangeInput label value changed");
  });

  it("textbox2", () => {
    const element: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector("#textbox2");
    expect(component.label).toBe(component.label);

    element.value = "Dotnet - updated by event";
    element.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    expect(component.label).toBe("Dotnet - updated by event");
  });
});
