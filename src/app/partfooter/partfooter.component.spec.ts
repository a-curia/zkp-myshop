import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartfooterComponent } from './partfooter.component';

describe('PartfooterComponent', () => {
  let component: PartfooterComponent;
  let fixture: ComponentFixture<PartfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
