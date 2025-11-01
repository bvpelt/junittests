import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part32Component } from "./part32.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("Part32Component", () => {
  let component: Part32Component;
  let fixture: ComponentFixture<Part32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("simple array - ngFor1", () => {
    const element: DebugElement[] = fixture.debugElement.queryAll(
      By.css(".ngFor1")
    );
    expect(element.length).toEqual(4);
    element.forEach((obj: DebugElement, index: number) => {
      expect(obj.children[0].nativeElement.innerHTML.trim()).toEqual(
        component.colorNames[index]
      );
    });
  });

  it("colorlist array - ngFor2", () => {
    const element: DebugElement[] = fixture.debugElement.queryAll(
      By.css(".ngFor2")
    );
    expect(element.length).toEqual(4);
    element.forEach((obj: DebugElement, index: number) => {
      expect(obj.children[0].nativeElement.innerHTML.trim()).toEqual(
        "item: " +
          component.colorList[index].id +
          " name: " +
          component.colorList[index].name
      );
    });
  });

  it("colorlist array attributes - ngFor3", () => {
    const element: DebugElement[] = fixture.debugElement.queryAll(
      By.css(".ngFor3")
    );
    expect(element.length).toEqual(4);
    element.forEach((obj: DebugElement, index: number) => {
      const output = `item: ${component.colorList[index].id} name: ${
        component.colorList[index].name
      } index: ${index} first: ${index === 0 ? true : false} last: ${
        element.length - 1 === index ? true : false
      } even: ${index % 2 === 0} odd: ${index % 2 !== 0}`;
      expect(obj.children[0].nativeElement.innerHTML.trim()).toEqual(output);
    });
  });
});

