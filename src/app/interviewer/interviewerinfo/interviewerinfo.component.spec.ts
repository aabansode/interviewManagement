import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerinfoComponent } from './interviewerinfo.component';

describe('InterviewerinfoComponent', () => {
  let component: InterviewerinfoComponent;
  let fixture: ComponentFixture<InterviewerinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewerinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
