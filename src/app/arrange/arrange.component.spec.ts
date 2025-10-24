import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ArrangeComponent } from "./arrange.component";

describe("ArrangeComponent", () => {
  it("should return the correct message", () => {

    // Arrange
    let component = new ArrangeComponent();
    let tstmsg = "Test Message";

    // Act
    let msg = component.showMessage(tstmsg);

    // Assert
    expect(msg).toBe(tstmsg);
  });
});
