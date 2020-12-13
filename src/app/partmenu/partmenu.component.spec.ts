import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartmenuComponent } from './partmenu.component';

describe('PartmenuComponent', () => {
  let component: PartmenuComponent;
  let fixture: ComponentFixture<PartmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
