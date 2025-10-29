import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part17Component } from "./part17.component";
import { StudentService } from "../services/student.service";
import { provideHttpClient } from "@angular/common/http";
import { provideRouter } from "@angular/router";

describe("Part17Component", () => {
  let component: Part17Component;
  let fixture: ComponentFixture<Part17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
