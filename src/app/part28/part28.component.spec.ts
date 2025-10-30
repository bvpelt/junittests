import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms"; // needed for 2way data binding
import { Part28Component } from "./part28.component";

describe("Part28Component", () => {
  let component: Part28Component;
  let fixture: ComponentFixture<Part28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part28Component, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Part28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("set studentName from component", (done) => {
    component.studentName = "dotnetoffice_updated";
    fixture.detectChanges();

    //
    // to detect the async change wait until change is available
    // also include 'done' to indicate the test is done!
    //

    fixture.whenStable().then(() => {
      const element: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector("#name");
      expect(element.value).toEqual(component.studentName);
      done();
    });
  });

  it("set textbox value", (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let element: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector("#name");
      element.value = "textbox updated";
      element.dispatchEvent(new Event("input"));
      expect(element.value).toEqual(component.studentName);
      done();
    });
  });

  it("button click test case", (done) => {
    fixture.detectChanges();
    let element: HTMLButtonElement =
      fixture.debugElement.nativeElement.querySelector("#button1");

    // simulate click event
    fixture.whenStable().then(() => {
      element.click();
      expect(component.studentName).toEqual("Dotnet Office");

      // check texbox
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let element: HTMLInputElement =
          fixture.debugElement.nativeElement.querySelector("#name");
        expect(element.value).toEqual("Dotnet Office");
        done();
      });
    });
  });
});
