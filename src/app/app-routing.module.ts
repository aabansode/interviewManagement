import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInterviewerComponent } from './admin/add-interviewer/add-interviewer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AssignComponent } from './admin/assign/assign.component';
import { StatusComponent } from './admin/status/status.component';
import { CandidateModule } from './candidate/candidate.module';
import { UploadresumeComponent } from './candidate/uploadresume/uploadresume.component';
import { InterviewerinfoComponent } from './interviewer/interviewerinfo/interviewerinfo.component';
import { CandidateLoginComponent } from './candidate/candidate-login/candidate-login.component';


const routes: Routes = [
  {path:'', component:HomepageComponent},
 {path:'admin',component:AdminhomeComponent,children:[{path:'',component:AddInterviewerComponent},
 {path:'assignCandToInterviewer',component:AssignComponent},
 {path:'status',component:StatusComponent},{path:'addInterviewer',component:AddInterviewerComponent}]},
 {path:'candidate', component:UploadresumeComponent},
 {path:'interviewer',component:InterviewerinfoComponent},
 {path:'loginCandidate',component:CandidateLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
