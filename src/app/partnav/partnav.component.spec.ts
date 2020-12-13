import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnavComponent } from './partnav.component';

describe('PartnavComponent', () => {
  let component: PartnavComponent;
  let fixture: ComponentFixture<PartnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
