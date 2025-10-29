import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part06Component } from "./part06.component";
import { add, divide, multiply, subtract } from "../Calculator";

describe("Part06Component", () => {
  let component: Part06Component;
  let fixture: ComponentFixture<Part06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part06Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
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

  xit("show the addition result greater", () => {
    const app = fixture.componentInstance;
    expect(add(app.num1, app.num2)).toBeGreaterThan(20);
  });
});
