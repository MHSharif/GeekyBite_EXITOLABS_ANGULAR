import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorreqComponent } from './authorreq.component';

describe('AuthorreqComponent', () => {
  let component: AuthorreqComponent;
  let fixture: ComponentFixture<AuthorreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
