import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part39Component } from './part39.component';

describe('Part39Component', () => {
  let component: Part39Component;
  let fixture: ComponentFixture<Part39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part39Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
