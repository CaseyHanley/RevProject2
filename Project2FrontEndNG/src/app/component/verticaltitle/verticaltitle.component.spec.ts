import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticaltitleComponent } from './verticaltitle.component';

describe('VerticaltitleComponent', () => {
  let component: VerticaltitleComponent;
  let fixture: ComponentFixture<VerticaltitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticaltitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticaltitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
