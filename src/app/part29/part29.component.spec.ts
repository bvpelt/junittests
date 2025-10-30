import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing";
import { FormsModule } from "@angular/forms"; // needed for 2way data binding
import { Part29Component } from "./part29.component";
import { async, asyncScheduler } from "rxjs";

describe("Part29Component", () => {
  let component: Part29Component;
  let fixture: ComponentFixture<Part29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part29Component, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Part29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("set studentName from component", (done) => {
    component.studentName = "dotnetoffice_updated";
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const element: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector("#name");
      expect(element.value).toEqual(component.studentName);
      done();
    });
  });

  it("set studentName from component - async", async () => {
    // 1. Arrange/Act (Update component property)
    component.studentName = "dotnetoffice_updated";

    // 2. Act (Trigger change detection)
    fixture.detectChanges();

    // 3. Act (Wait for all asynchronous operations, like binding updates, to complete)
    // await is used directly on the Promise returned by fixture.whenStable()
    await fixture.whenStable();

    // 4. Assert (Check the rendered element value)
    const element: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector("#name");

    // NOTE: This assumes Part29Component has a studentName property and an input with id="name"
    expect(element.value).toEqual(component.studentName);
  });

  it("set studentName from component - fakeAsync", fakeAsync(() => {
    component.studentName = "dotnetoffice_updated";
    fixture.detectChanges();

    tick();

    const element: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector("#name");
    expect(element.value).toEqual(component.studentName);
  }));
});
