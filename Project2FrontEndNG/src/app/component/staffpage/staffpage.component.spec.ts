import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffpageComponent } from './staffpage.component';

describe('StaffpageComponent', () => {
  let component: StaffpageComponent;
  let fixture: ComponentFixture<StaffpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
