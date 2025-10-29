import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Part21Component } from "./part21.component";

describe("Part21Component", () => {
  let component: Part21Component;
  let fixture: ComponentFixture<Part21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Part21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
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
});
