import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartjumbotronComponent } from './partjumbotron.component';

describe('PartjumbotronComponent', () => {
  let component: PartjumbotronComponent;
  let fixture: ComponentFixture<PartjumbotronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartjumbotronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartjumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
