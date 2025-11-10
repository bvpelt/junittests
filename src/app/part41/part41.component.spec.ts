import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part41Component } from './part41.component';

describe('Part41Component', () => {
  let component: Part41Component;
  let fixture: ComponentFixture<Part41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part41Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
