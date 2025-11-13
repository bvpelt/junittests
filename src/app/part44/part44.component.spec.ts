import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part44Component } from './part44.component';

describe('Part44Component', () => {
  let component: Part44Component;
  let fixture: ComponentFixture<Part44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part44Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
