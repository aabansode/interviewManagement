import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadresumeComponent } from './uploadresume/uploadresume.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UploadresumeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports:[UploadresumeComponent]
})
export class CandidateModule { }
