import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part20Component } from "./part20.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("Part20Component", () => {
  let component: Part20Component;
  let fixture: ComponentFixture<Part20Component>;
  let deb: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Increase count click", () => {
    // find the button and h1 elements in the DOM
    const btn = deb.query(By.css("#btnincreaseNumber"));
    const btn2 = deb.query(
      (d) => d.name === "button" && d.attributes["id"] === "btnincreaseNumber"
    );
    const h1 = deb.query(By.css("#countnumber"));
    const h12 = deb.query(
      (h1) => h1.name === "h1" && h1.attributes["id"] === "countnumber"
    );
    //deb.query(By.css("countnumber"));

    // Get initial count value
    let initialCount = component.CountNumber;

    // generate event click on the button
    btn.triggerEventHandler("click", {});

    // reflect the changes
    fixture.detectChanges();

    expect(component.CountNumber).toEqual(
      parseInt(h1.nativeElement.innerText, 10)
    );
    expect(component.CountNumber).toBe(initialCount + 1);
  });

  it("Decreate count click", () => {
    // find the button and h1 elements in the DOM
    const btn = deb.query(By.css("#btndecreaseNumber"));
    const btn2 = deb.query(
      (d) => d.name === "button" && d.attributes["id"] === "btndecreaseNumber"
    );
    const h1 = deb.query(By.css("#countnumber"));
    const h12 = deb.query(
      (h1) => h1.name === "h1" && h1.attributes["id"] === "countnumber"
    );
    //deb.query(By.css("countnumber"));

    // Get initial count value
    let initialCount = component.CountNumber;

    // generate event click on the button
    btn.triggerEventHandler("click", {});

    // reflect the changes
    fixture.detectChanges();

    expect(component.CountNumber).toEqual(
      parseInt(h1.nativeElement.innerText, 10)
    );
    expect(component.CountNumber).toBe(initialCount - 1);
  });
});
