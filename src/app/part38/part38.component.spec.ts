import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part38Component } from './part38.component';

describe('Part38Component', () => {
  let component: Part38Component;
  let fixture: ComponentFixture<Part38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part38Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
