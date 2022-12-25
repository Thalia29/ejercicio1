import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomComponent } from './fom.component';

describe('FomComponent', () => {
  let component: FomComponent;
  let fixture: ComponentFixture<FomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
