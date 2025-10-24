import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  var specificComponent: HeaderComponent | null = null;

  beforeAll(function () {
    console.log("HeaderComponent beforeAll");
  });

  afterAll(function () {
    console.log("HeaderComponent afterAll");
  });

  beforeEach(function () {
    specificComponent = new HeaderComponent(); // Create a new instance for each test

    console.log("HeaderComponent beforeEach");
  });

  afterEach(function () {
    console.log("HeaderComponent afterEach");
    specificComponent = null; // Clean up the instance after each test
  });

  it("test 1", () => {
    console.log("HeaderComponent test 1");
  });

  it("test 2", () => {
    console.log("HeaderComponent test 2");
  });

  it("test 3", () => {
    console.log("HeaderComponent test 3");
  });

  it("IncreaseCount method should increase Count by given number", () => {
    const component = new HeaderComponent();
    const initialCount = component.Count;
    const increaseBy = 5;

    console.log("IncreaseCount Initial Count:", initialCount);
    component.IncreaseCount(increaseBy);

    expect(component.Count).toEqual(initialCount + increaseBy);
  });

  it("DecreaseCount method should decrease Count by given number", () => {
    const component = new HeaderComponent();
    const initialCount = component.Count;
    const decreaseBy = 3;

    console.log("DecreaseCount Initial Count:", initialCount);
    component.DecreaseCount(decreaseBy);

    expect(component.Count).toEqual(initialCount - decreaseBy);
  });

  const globalComponent = new HeaderComponent(); // Global instance for multiple tests

  it("Global IncreaseCount method should increase Count by given number", () => {
    const initialCount = globalComponent.Count;
    const increaseBy = 5;

    console.log("Global IncreaseCount Initial Count:", initialCount);
    globalComponent.IncreaseCount(increaseBy);

    expect(globalComponent.Count).toEqual(initialCount + increaseBy);
  });

  it("Global DecreaseCount method should decrease Count by given number", () => {
    const initialCount = globalComponent.Count;
    const decreaseBy = 3;

    console.log("Global DecreaseCount Initial Count:", initialCount);
    globalComponent.DecreaseCount(decreaseBy);

    expect(globalComponent.Count).toEqual(initialCount - decreaseBy);
  });

  it("Specific IncreaseCount method should increase Count by given number", () => {
    const initialCount = specificComponent!.Count;
    const increaseBy = 5;

    console.log("Specific IncreaseCount Initial Count:", initialCount);
    specificComponent!.IncreaseCount(increaseBy);

    expect(specificComponent!.Count).toEqual(initialCount + increaseBy);
  });

  it("Specific DecreaseCount method should decrease Count by given number", () => {
    const initialCount = specificComponent!.Count;
    const decreaseBy = 3;

    console.log("Specific DecreaseCount Initial Count:", initialCount);
    specificComponent!.DecreaseCount(decreaseBy);

    expect(specificComponent!.Count).toEqual(initialCount - decreaseBy);
  });
});
