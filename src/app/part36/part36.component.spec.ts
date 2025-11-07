import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part36Component } from './part36.component';

describe('Part36Component', () => {
  let component: Part36Component;
  let fixture: ComponentFixture<Part36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part36Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
