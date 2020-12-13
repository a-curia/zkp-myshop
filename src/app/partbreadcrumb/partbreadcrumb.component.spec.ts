import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartbreadcrumbComponent } from './partbreadcrumb.component';

describe('PartbreadcrumbComponent', () => {
  let component: PartbreadcrumbComponent;
  let fixture: ComponentFixture<PartbreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartbreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartbreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
