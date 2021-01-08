import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorreqComponent } from './editorreq.component';

describe('EditorreqComponent', () => {
  let component: EditorreqComponent;
  let fixture: ComponentFixture<EditorreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
