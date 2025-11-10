import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Part37Component } from "./part37.component";

import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { routes } from "../app.routes";
import { Location } from "@angular/common";
import { RouterTestingHarness } from "@angular/router/testing";
import { provideRouter } from "@angular/router";

describe("Part37Component", () => {
  let component: Part37Component;
  let fixture: ComponentFixture<Part37Component>;
  let location: Location;
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part37Component],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(Part37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();

    location = TestBed.inject(Location);
    // Initialize the harness on the root path to start the routing test
    harness = await RouterTestingHarness.create("/part37");
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("click on home link", async () => {
    // Navigate to the component first
    await harness.navigateByUrl("/home");

    // Get the anchor from the harness's debug element
    const anchor: DebugElement = harness.routeDebugElement!.query(
      By.css("#part37home")
    );

    expect(anchor).not.toBeNull();

    // Trigger click on the DebugElement, not the native element
    anchor.nativeElement.click();

    // Wait for navigation to complete
    await harness.fixture.whenStable();

    expect(location.path()).toEqual("/home");
  });
});
