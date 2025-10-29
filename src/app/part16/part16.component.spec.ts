import { Part16Component } from "./part16.component";

describe("Part16Component", () => {
  // Arrange
  let component = new Part16Component();

  // Act
  let intialMsg = "Hello, World!";
  let msg = component.ShowMessage(intialMsg);

  // Assert
  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("ShowMessage method should return the same message passed to it", () => {
    expect(msg).toEqual(intialMsg);
  });
});
