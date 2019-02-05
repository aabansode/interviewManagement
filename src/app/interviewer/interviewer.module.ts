import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewerinfoComponent } from './interviewerinfo/interviewerinfo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SafePipe } from '../safe.pipe';

@NgModule({
  declarations: [InterviewerinfoComponent,SafePipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class InterviewerModule { }
