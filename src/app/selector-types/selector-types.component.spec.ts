import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorTypesComponent } from './selector-types.component';

describe('SelectorTypesComponent', () => {
  let component: SelectorTypesComponent;
  let fixture: ComponentFixture<SelectorTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
