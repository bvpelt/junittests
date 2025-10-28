import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideHttpClient } from "@angular/common/http";
import { StudentService } from "../services/student.service";
import { StudentComponent } from "./student.component";
import { provideRouter } from "@angular/router";
import { of } from "rxjs";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("StudentComponent", () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let h1: HTMLElement;
  let deb: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentComponent],
      providers: [provideHttpClient(), StudentService, provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentComponent);

    h1 = fixture.nativeElement.querySelector("h1");

    component = fixture.componentInstance;

    // NOTE: For the 'SpyOn method' test to work, 'calculate' must exist on StudentComponent
    if (!component.calculate) {
      (component as any).calculate = (a: number, b: number) => a + b;
    }
    fixture.detectChanges();

    deb = fixture.debugElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("SpyOn method", () => {
    let spy = spyOn(component, "calculate");
    component.saveData();
    expect(spy).toHaveBeenCalled();
  });

  it("SpyOn method - 1", () => {
    spyOn(component, "calculate").and.returnValues(10, 20);
    let result = component.StudentResult();
    expect(result).toEqual("Fail");
  });

  it("SpyOn method - 2", () => {
    spyOn(component, "calculate").and.returnValues(40, 20);
    let result = component.StudentResult();
    expect(result).toEqual("Pass");
  });

  it("SpyOn method - 3", () => {
    let service = fixture.debugElement.injector.get(StudentService);
    let spy = spyOn(service, "SaveDetails").and.callFake(() => {
      return of({
        result1: 200,
      });
    });
    // call the stub method saveDataIntoConsole
    spyOn(component, "SaveDataIntoConsole").and.stub();
    component.saveData();
    expect(component.result).toEqual({
      result1: 200,
    });
  });

  it("Verify h1 element", () => {
    component.StudentSchoolResult();
    fixture.detectChanges(); // Cruxial: Initial value is '', make sure latest changes are reflected
    expect(h1.textContent).toBe(component.studentResult);
  });

  it("Increate count click", () => {
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

  it("Private method pcalculate test", () => {
    const result = (component as any).pcalculate(15, 25);
    // const result = component.pcalculate(15, 25); // This will give error as pcalculate is private
    const result2 = component["pcalculate"](15, 25);
    expect(result).toBe(40);
  });

  it("Private method ShowName test", () => {
    const name = (component as any).ShowName();
    // const name = component.ShowName(); // This will give error as ShowName is private
    const name2 = component["ShowName"]();
    expect(name).toBe("Dot Net Office");
    expect((component as any).pname).toBe("Dot Net Office");
    expect(component["pname"]).toBe("Dot Net Office");
  });

  it("Spyon Private method pcalculate test", () => {
    let spyMethod = spyOn(component as any, "pcalculate");
    // let spyMethod = spyOn<any>(component, "pcalculate"); // Alternative syntax but not combined with previous line
    const result = (component as any).pcalculate(15, 25);

    expect(spyMethod).toHaveBeenCalled();
  });

  it("Spyon Private method ShowName test", () => {
    let spyName = spyOn(component as any, "ShowName");
    // let spyName = spyOn<any>(component, "ShowName"); // Alternative syntax but not combined with previous line
    const name = (component as any).ShowName();
    // const name = component.ShowName(); // This will give error as ShowName is private
    expect(spyName).toHaveBeenCalled();
  });

  it("Interpolation test", () => {
    const name: HTMLElement =
      fixture.debugElement.nativeElement.querySelector("#name");
    expect(name.innerHTML).toBe(component.name);

    // change component name and reflect the changes
    component.name = "name updated";
    fixture.detectChanges(); // Essential to reflect the changes in the template
    expect(name.innerHTML).toBe(component.name);
  });

  it("Interpolation for textbox", () => {
    const inputval: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector("#usenum");
    expect(inputval.type).toBe(component.type);
    expect(inputval.placeholder).toBe(component.placeholder);

    // change component type and placeholder and reflect the changes
    component.type = "text";
    component.placeholder = "Enter text here";
    fixture.detectChanges(); // Essential to reflect the changes in the template
    expect(inputval.type).toEqual(component.type);
    expect(inputval.placeholder).toEqual(component.placeholder);

    expect(inputval.readOnly).toBeFalsy();
    expect(inputval.readOnly).toBe(component.userreadonly);

  });
});
