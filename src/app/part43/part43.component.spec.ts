import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part43Component } from './part43.component';

describe('Part43Component', () => {
  let component: Part43Component;
  let fixture: ComponentFixture<Part43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part43Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
