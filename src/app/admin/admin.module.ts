import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInterviewerComponent } from './add-interviewer/add-interviewer.component';
import { AssignComponent } from './assign/assign.component';
import { StatusComponent } from './status/status.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AddInterviewerComponent, AssignComponent, StatusComponent, AdminhomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports:[AddInterviewerComponent,AssignComponent,StatusComponent, AdminhomeComponent]
})
export class AdminModule { }
