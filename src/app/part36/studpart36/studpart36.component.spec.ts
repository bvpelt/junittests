import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studpart36Component } from './studpart36.component';

describe('Studpart36Component', () => {
  let component: Studpart36Component;
  let fixture: ComponentFixture<Studpart36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studpart36Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studpart36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
