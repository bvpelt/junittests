import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Part22Component } from "./part22.component";

describe("Part22Component", () => {
  let component: Part22Component;
  let fixture: ComponentFixture<Part22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
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
});
