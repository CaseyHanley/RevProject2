import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseyComponent } from './casey.component';

describe('CaseyComponent', () => {
  let component: CaseyComponent;
  let fixture: ComponentFixture<CaseyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
