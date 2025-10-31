import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part05Component } from "./part05.component";
import { add, divide, multiply, subtract } from "../Calculator";

describe("Part05Component", () => {
  let component: Part05Component;
  let fixture: ComponentFixture<Part05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part05Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should be test Part05", () => {
    const app = fixture.componentInstance;
     expect(app.title).toBe(component.title);
  });

  it("show alertmessage", () => {
    const app = fixture.componentInstance;
    const message = "Hello, World!";
    expect(app.ShowMessage(message)).toBe(message);
  });

  it("show the addition result equal", () => {
    const app = fixture.componentInstance;
    expect(add(app.num1, app.num2)).toBe(30);
  });

  it("show the addition result subtract", () => {
    const app = fixture.componentInstance;
    expect(subtract(app.num1, app.num2)).toBe(-10);
  });

  it("show the addition result divide", () => {
    const app = fixture.componentInstance;
    expect(divide(app.num1, app.num2)).toBe(0.5);
  });

  it("show the addition result multiply", () => {
    const app = fixture.componentInstance;
    expect(multiply(app.num1, app.num2)).toBe(200);
  });

  it("show the addition result greater", () => {
    const app = fixture.componentInstance;
    expect(add(app.num1, app.num2)).toBeGreaterThan(20);
  });
});
