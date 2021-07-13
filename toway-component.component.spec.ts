import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowayComponentComponent } from './toway-component.component';

describe('TowayComponentComponent', () => {
  let component: TowayComponentComponent;
  let fixture: ComponentFixture<TowayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TowayComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TowayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
