import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part25Component } from './part25.component';

describe('Part25Component', () => {
  let component: Part25Component;
  let fixture: ComponentFixture<Part25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part25Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Table colspan attribute test', () => {
    const element: HTMLTableElement = fixture.debugElement.nativeElement.querySelector('#colId');

    expect(element.getAttribute('colspan')).toEqual(component.columnSpan.toString());  
    });

});
