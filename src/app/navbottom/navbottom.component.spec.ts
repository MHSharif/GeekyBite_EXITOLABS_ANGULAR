import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbottomComponent } from './navbottom.component';

describe('NavbottomComponent', () => {
  let component: NavbottomComponent;
  let fixture: ComponentFixture<NavbottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
