import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part14Component } from "./part14.component";

describe("Part14Component", () => {
  var specificComponent: Part14Component | null = null;

  beforeEach(function () {
    specificComponent = new Part14Component(); // Create a new instance for each test

    console.log("Part14Component beforeEach");
  });

  afterEach(function () {
    console.log("Part14Component afterEach");
    specificComponent = null; // Clean up the instance after each test
  });

  it("should create", () => {
    expect(specificComponent).toBeTruthy();
  });

  it("test 1", () => {
    console.log("Part14Component test 1");
    expect(true).toBeTrue();
  });

  it("test 2", () => {
    console.log("Part14Component test 2");
    expect(true).toBeTrue();
  });

  it("test 3", () => {
    console.log("Part14Component test 3");
    expect(true).toBeTrue();
  });

  it("IncreaseCount method should increase Count by given number", () => {
    const component = new Part14Component();
    const initialCount = component.Count;
    const increaseBy = 5;

    console.log("IncreaseCount Initial Count:", initialCount);
    component.IncreaseCount(increaseBy);

    expect(component.Count).toEqual(initialCount + increaseBy);
  });

  it("DecreaseCount method should decrease Count by given number", () => {
    const component = new Part14Component();
    const initialCount = component.Count;
    const decreaseBy = 3;

    console.log("DecreaseCount Initial Count:", initialCount);
    component.DecreaseCount(decreaseBy);

    expect(component.Count).toEqual(initialCount - decreaseBy);
  });
});
