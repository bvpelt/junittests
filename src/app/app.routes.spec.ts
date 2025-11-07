import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideRouter, Router, RouterLinkWithHref } from "@angular/router";
import { Location } from "@angular/common";
import { routes } from "./app.routes";
import { RouterTestingHarness } from "@angular/router/testing";
import { Part36Component } from "./part36/part36.component";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { AppComponent } from "./app.component";

describe("Routing testing", () => {
  let objRouter: Router;
  let location: Location;
  let harness: RouterTestingHarness;

  let component: Part36Component;
  let fixture: ComponentFixture<Part36Component>;
  let debugElement: DebugElement;

  let appDebugElement: DebugElement;
  let appComponent: AppComponent;
  let appFixture: ComponentFixture<AppComponent>;

  // Components are not needed in `TestBed` when using `loadComponent` in routes
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Only the `provideRouter` is needed for routing tests
      providers: [provideRouter(routes)],
    }).compileComponents();

    objRouter = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(Part36Component);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();

    appFixture = TestBed.createComponent(AppComponent);
    appDebugElement = appFixture.debugElement;
    appComponent = appFixture.componentInstance;
    appFixture.detectChanges();

    // Initialize the harness on the root path to start the routing test
    harness = await RouterTestingHarness.create();
  });

  it("should navigate to the Studpart26Component path via the 'redirect/student' redirect", async () => {
    // Navigate to the path that has the redirect
    await harness.navigateByUrl("/redirect/student");

    // Wait for the navigation to stabilize (handles the redirect)
    await harness.detectChanges();

    // Assert that the location path reflects the destination of the redirect
    expect(location.path()).toEqual("/part36/student");
  });

  it("click on student link", async () => {
    // Navigate to the component first
    await harness.navigateByUrl("/part36");

    // Get the anchor from the harness's debug element
    const anchor: DebugElement = harness.routeDebugElement!.query(
      By.css("#studentref")
    );

    expect(anchor).not.toBeNull();

    // Trigger click on the DebugElement, not the native element
    anchor.nativeElement.click();

    // Wait for navigation to complete
    await harness.fixture.whenStable();

    expect(location.path()).toEqual("/part36/student");
  });
});
