import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studpart26Component } from './studpart26.component';

describe('Studpart26Component', () => {
  let component: Studpart26Component;
  let fixture: ComponentFixture<Studpart26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studpart26Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studpart26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
