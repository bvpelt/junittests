import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part37Component } from './part37.component';

describe('Part37Component', () => {
  let component: Part37Component;
  let fixture: ComponentFixture<Part37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part37Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
