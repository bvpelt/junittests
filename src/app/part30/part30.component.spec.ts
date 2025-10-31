import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part30Component } from "./part30.component";

describe("Part30Component", () => {
  let component: Part30Component;
  let fixture: ComponentFixture<Part30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("number > 20", () => {
    const element1: HTMLDivElement =
      fixture.debugElement.nativeElement.querySelector("#div1");
    const element2: HTMLDivElement =
      fixture.debugElement.nativeElement.querySelector("#div2");
    expect(element1).not.toBeNull();
    expect(element2).toBeNull();
  });

  it("number > 20 for ngTemplate", () => {
    const element1: HTMLHeadingElement =
      fixture.debugElement.nativeElement.querySelector("#ng1");
    const element2: HTMLHeadingElement =
      fixture.debugElement.nativeElement.querySelector("#ng2");
    expect(element1).not.toBeNull();
    expect(element2).toBeNull();
  });

  it("number < 20 for ngTemplate", () => {
    component.num = 15;

    fixture.detectChanges();

    const element1: HTMLHeadingElement =
      fixture.debugElement.nativeElement.querySelector("#ng1");
    const element2: HTMLHeadingElement =
      fixture.debugElement.nativeElement.querySelector("#ng2");
    expect(element1).toBeNull();
    expect(element2).not.toBeNull();
  });

  it("number === 20 for ngTemplate", () => {
    component.num = 20;

    fixture.detectChanges();

    const element1: HTMLHeadingElement =
      fixture.debugElement.nativeElement.querySelector("#ng1");
    const element2: HTMLHeadingElement =
      fixture.debugElement.nativeElement.querySelector("#ng2");
    expect(element1).not.toBeNull();
    expect(element2).toBeNull();
  });
});
