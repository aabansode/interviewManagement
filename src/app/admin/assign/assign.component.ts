import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {
  candidates: any;
  candidatesToAssign=[];
  interviewer: any;
  assigned: any;
  rForm: FormGroup;
  post: any;
  candidateSelected: string = "";
  interviewerSelected: string = "";
  date: string = "";
  time: string = "";
  interviewerEmail="";
  interViewerPassword="";
  videopath:string="";
  resumepath:string="";
  //nothingtoShow:boolean;



  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'candidateSelected': [null, Validators.required],
      'interviewerSelected': [null, Validators.required],
      'date': [null, Validators.required],
      'time': [null, Validators.required]

    })



  }
  addPost(post) {
    this.candidateSelected = post.candidateSelected;
    this.interviewerSelected = post.interviewerSelected;
    this.date = post.date;
    this.time = post.time;
    
    for(var i=0;i<this.candidates.length;i++){
      if(this.candidates[i].name==this.candidateSelected){
        this.videopath=this.candidates[i].video;
        this.resumepath=this.candidates[i].resume;
      }
    }



    this.assigned.push({ 'candidateName': this.candidateSelected, 'interviewerName': this.interviewerSelected, 'date': this.date, 'time': this.time, 'marks':'N/A','evaluationDone':false,'candidateVideo':this.videopath,'candidateResume':this.resumepath });
    localStorage.setItem("assigned", JSON.stringify(this.assigned));

    this.rForm.reset();




  }
  ngOnInit() {
    if (JSON.parse(localStorage.getItem('candidate')) != null) {
      this.candidates = JSON.parse(localStorage.getItem('candidate'));

    }
    else {
      this.candidates = new Array();
    }

    if (JSON.parse(localStorage.getItem('interviewer')) != null) {
      this.interviewer = JSON.parse(localStorage.getItem('interviewer'));
    }
    else {
      this.interviewer = new Array();
    }


    if (JSON.parse(localStorage.getItem('assigned')) != null) {
      this.assigned = JSON.parse(localStorage.getItem('assigned'));
    }
    else {
      this.assigned = new Array();
    }
var j;
    for(var i=0;i<this.candidates.length;i++){
      for(j=0;j<this.assigned.length;j++){
        if(this.candidates[i].name==this.assigned[j].candidateName){
          break;
        }
      }
      if(j==this.assigned.length){
        this.candidatesToAssign.push(this.candidates[i].name);
        
      }
      
    }
// if(this.candidatesToAssign.length==0){
//   this.nothingtoShow=true;
// }
// else{
//   this.nothingtoShow=false;
// }
    
  }

}
