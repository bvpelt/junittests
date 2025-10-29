import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part04Component } from "./part04.component";

describe("Part04Component", () => {
  let component: Part04Component;
  let fixture: ComponentFixture<Part04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part04Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should be test Part04", () => {
    const app = fixture.componentInstance;
    expect(app.test).toBe("Part04");
  });
});
