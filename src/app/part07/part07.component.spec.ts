import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part07Component } from "./part07.component";
import { add } from "../Calculator";

describe("Part07Component", () => {
  let component: Part07Component;
  let fixture: ComponentFixture<Part07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part07Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("show the addition result greater", () => {
    const app = fixture.componentInstance;
    expect(add(app.num1, app.num2)).toBeGreaterThan(20);
  });
  
});
