import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part31Component } from "./part31.component";

describe("Part31Component", () => {
  let component: Part31Component;
  let fixture: ComponentFixture<Part31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("ngSwitch test case option 'One'", () => {
    const elementSwitch: HTMLDivElement =
      fixture.debugElement.nativeElement.querySelector("#div1");

    expect(elementSwitch.childElementCount).toEqual(1);
    expect(elementSwitch.children.length).toEqual(1);
    expect(elementSwitch.children[0].innerHTML).toEqual("One is selected");
  });

  it("ngSwitch test case option 'Two'", () => {
    component.selectedNum = "Two";
    fixture.detectChanges();

    const elementSwitch: HTMLDivElement =
      fixture.debugElement.nativeElement.querySelector("#div1");

    expect(elementSwitch.childElementCount).toEqual(1);
    expect(elementSwitch.children.length).toEqual(1);
    expect(elementSwitch.children[0].innerHTML).toEqual("Two is selected");
  });
});
