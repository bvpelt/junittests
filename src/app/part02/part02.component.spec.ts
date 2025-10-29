import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part02Component } from "./part02.component";

describe("Part02Component", () => {
  let component: Part02Component;
  let fixture: ComponentFixture<Part02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part02Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should be test Part02", () => {
    const app = fixture.componentInstance;
    expect(app.test).toBe("Part02");
  });

  it("should have content", () => {
    const app = fixture.componentInstance;
    expect(app.content).toBe("This is part 02 component content.");
  });
});
