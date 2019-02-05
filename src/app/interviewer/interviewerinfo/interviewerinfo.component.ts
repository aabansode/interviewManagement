import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import {DomSanitizationService} from '@angular/platform-browser';

@Component({
  selector: 'app-interviewerinfo',
  templateUrl: './interviewerinfo.component.html',
  styleUrls: ['./interviewerinfo.component.css']
})
export class InterviewerinfoComponent implements OnInit {
  statusAssigned: any;
  candidates:any;
  interviewer:any;
  candidateslist:any;
  datelist:any;
  timelist:any;
  listshow=[];
  marks:number;
  success:boolean;
  updatedMarks:boolean;
  interviewername:string="";
  evaluationDone:boolean;
  emptymarks:boolean;
  activeVideo:boolean=false;
  videopath:string="";
  resumepath:string="";
  activeresume:boolean=false;
  DomSanitizationService;

  rForm: FormGroup;
  post: any;
  email: string = "";

  password: string = "";
  wrongCredentialsMsg="";

  

  constructor(private fb:FormBuilder) {
    this.rForm = fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],


    });
  

  }

  addPost(post) {
    this.email = post.email;
    this.password = post.password;
    


    for(var i=0;i<this.interviewer.length;i++){
      
      if(this.interviewer[i].email==this.email && this.interviewer[i].password==this.password)
      {
        this.interviewername=this.interviewer[i].name;
        for(var j=0;j<this.statusAssigned.length;j++)
        {
          if(this.statusAssigned[j].interviewerName==this.interviewer[i].name)
          {
            this.listshow.push({'candidateName':this.statusAssigned[j].candidateName,'date':this.statusAssigned[j].date,'time':this.statusAssigned[j].time,'evaluatedOnce':this.statusAssigned[j].evaluationDone});
          }
        }
        this.wrongCredentialsMsg="Success!";
        this.success=true;
        break;
      }
      else{
        this.wrongCredentialsMsg="Wrong login credentials!";
        this.success=false;
      }
    }


    this.rForm.reset();


  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('assigned')) != null) {
      this.statusAssigned = JSON.parse(localStorage.getItem('assigned'));
    }
    else {
      this.statusAssigned = new Array();
    }
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
    this.updatedMarks=false;

  }

  evaluate(nameofcandidate,comingMarks){
    
    if(comingMarks!=undefined){
      for(var i=0;i<this.statusAssigned.length;i++)
      {
   
       if(this.statusAssigned[i].candidateName==nameofcandidate){
         console.log("matched:"+comingMarks+"/10");
         this.statusAssigned[i].marks=comingMarks+"/10";
         this.statusAssigned[i].evaluationDone=true;
         localStorage.setItem("assigned", JSON.stringify(this.statusAssigned));
         //this.updatedMarks=true;
       }
      }
      this.emptymarks=false;
    }
    else{
      this.emptymarks=true;
    }
   
  }

  showvideo(candName){
    for(var i=0;i<this.statusAssigned.length;i++){
      if(this.statusAssigned[i].candidateName==candName){
        this.videopath=this.statusAssigned[i].candidateVideo;
        this.videopath="assets/video/"+this.videopath;
        // this.videopath=this.videourl(this.videopath);
        console.log("path--:"+this.videopath);
        this.activeVideo=true;
      }
    }
  }

  showresume(candName){
    for(var i=0;i<this.statusAssigned.length;i++){
      if(this.statusAssigned[i].candidateName==candName){
        this.resumepath=this.statusAssigned[i].candidateResume;
        this.resumepath="/assets/resume/"+this.resumepath;
        console.log("pathresume--:"+this.resumepath);
        this.activeresume=true;
      }
    }
  }

  // videourl(path){
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(path);
  // }
  // resumeurl(path){
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(path);
  // }

}
