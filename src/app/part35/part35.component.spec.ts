import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part35Component } from './part35.component';

describe('Part35Component', () => {
  let component: Part35Component;
  let fixture: ComponentFixture<Part35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part35Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
