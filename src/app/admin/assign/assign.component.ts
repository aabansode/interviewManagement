import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {
  candidates = [{'id':1, 'name':'Vishwas yadav'}, {'id':2, 'name': 'Richard richard'}, {'id':3, 'name': 'Andrew Grey'}];
  interviewer = [{'id':1, 'name':'Ms. Z'}, {'id':2, 'name': 'Ms. y'}, {'id':3, 'name': 'Ms. X'}];
  rForm: FormGroup;
  post: any;
  candidateSelected:string="";
  interviewerSelected:string="";
  date:string="";
  time:string="";

  constructor(private fb:FormBuilder) {
    this.rForm=fb.group({
      'candidateSelected':[null,Validators.required],
      'interviewerSelected':[null,Validators.required],
      'date':[null,Validators.required],
      'time':[null,Validators.required]

    })

    

   }
   addPost(post)
   {
     
     this.candidateSelected=post.candidateSelected;
     this.interviewerSelected=post.interviewerSelected;
     this.date=post.date;
     this.time=post.time;

   }
  ngOnInit() {
  }

}
