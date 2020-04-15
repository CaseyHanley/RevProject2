import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomeComponent } from './rome.component';

describe('RomeComponent', () => {
  let component: RomeComponent;
  let fixture: ComponentFixture<RomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
