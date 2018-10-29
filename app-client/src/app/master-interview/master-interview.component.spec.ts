import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterInterviewComponent } from './master-interview.component';

describe('MasterInterviewComponent', () => {
  let component: MasterInterviewComponent;
  let fixture: ComponentFixture<MasterInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
