import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part42Component } from './part42.component';

describe('Part42Component', () => {
  let component: Part42Component;
  let fixture: ComponentFixture<Part42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part42Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
