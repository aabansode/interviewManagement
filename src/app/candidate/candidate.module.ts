import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadresumeComponent } from './uploadresume/uploadresume.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CandidateLoginComponent } from './candidate-login/candidate-login.component';

@NgModule({
  declarations: [UploadresumeComponent, CandidateLoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports:[UploadresumeComponent]
})
export class CandidateModule { }
