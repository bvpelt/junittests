import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part03Component } from "./part03.component";

describe("Part03Component", () => {
  let component: Part03Component;
  let fixture: ComponentFixture<Part03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part03Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should be test Part03", () => {
    const app = fixture.componentInstance;
    expect(app.test).toBe("Part03");
  });

  it("Mytestcase", () => {
    expect(true).toBe(true);
  });
});
