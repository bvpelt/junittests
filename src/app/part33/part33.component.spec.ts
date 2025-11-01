import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part33Component } from './part33.component';

describe('Part33Component', () => {
  let component: Part33Component;
  let fixture: ComponentFixture<Part33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part33Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
