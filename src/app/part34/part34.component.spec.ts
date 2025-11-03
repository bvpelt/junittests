import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Part34Component } from "./part34.component";
import { LowerCasePipe, UpperCasePipe } from "@angular/common";
import { FileSizePipe } from "../file-size.pipe";

describe("Part34Component", () => {
  let component: Part34Component;
  let fixture: ComponentFixture<Part34Component>;

  let upperPipe: UpperCasePipe;
  let lowerPipe: LowerCasePipe;
  let filePipe: FileSizePipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part34Component],
    }).compileComponents();

    upperPipe = new UpperCasePipe();
    lowerPipe = new LowerCasePipe();
    filePipe = new FileSizePipe();

    fixture = TestBed.createComponent(Part34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Test UpperPipe", () => {
    expect(upperPipe.transform(component.title)).toEqual(
      component.title.toUpperCase()
    );
  });

  it("Test LowerPipe", () => {
    expect(lowerPipe.transform(component.title)).toEqual(
      component.title.toLowerCase()
    );
  });

  it("Test FileSizePipe", () => {
    expect(filePipe.transform(component.size)).toEqual("File size is: 1.91 MB");
  });

  it("Test FileSizePipe with extension", () => {
    expect(filePipe.transform(component.size, "GB")).toEqual("File size is: 1.91 GB");
  });
});
