import { ComponentFixture, TestBed } from "@angular/core/testing";
//import { Part36Component } from "./part36/part36.component";
//import { AppComponent } from "./app.component";
import { Studpart26Component } from "./part36/studpart26/studpart26.component";
import { RouterTestingHarness } from "@angular/router/testing";
import { provideRouter, Router } from "@angular/router";
import { Location } from "@angular/common";
//import { ActivatedRoute } from "@angular/router";
import { routes } from "./app.routes";

describe("Part36 Routing", () => {
  let component: Studpart26Component;
  let fixture: ComponentFixture<Studpart26Component>;
  //let appComponent: AppComponent;
  //let appFixture: ComponentFixture<AppComponent>;
  //let PartComponent: Part36Component;
  //let PartFixture: ComponentFixture<Part36Component>;
  let objRouter: Router;
  let location: Location;
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [provideRouter(routes)],
    }).compileComponents();

    objRouter = TestBed.inject(Router);
    location = TestBed.inject(Location);
    harness = await RouterTestingHarness.create();

    fixture = TestBed.createComponent(Studpart26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    /*
    appFixture = TestBed.createComponent(AppComponent);
    appComponent = appFixture.componentInstance;
*/
    objRouter.initialNavigation();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Default route", () => {
    /*
    appFixture.detectChanges();

    appFixture.whenStable().then(() => {
      expect(location.path).toEqual("/part36/student");
    });
    */
  });
});
