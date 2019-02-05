import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-uploadresume',
  templateUrl: './uploadresume.component.html',
  styleUrls: ['./uploadresume.component.css']
})
export class UploadresumeComponent implements OnInit {

  userlist:any;

  
  

  rForm: FormGroup;
  post: any;
  email:string="";
  name:string="";
  mobno:string="";
  experienceyear:string="";
  experiencemonths:string="";
  resume:string="";
  password:string="";
  video:string="";
  id:number;

  forResumePath:string="";
  forVideoPath:string="";
  
  
  constructor(private fb:FormBuilder) { 
    this.rForm=fb.group({
      'name': [null, Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z. ]+$')])],
      'email':[null,Validators.compose([Validators.required,Validators.email])],
      'mobno':[null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
      'experienceyear':[null,Validators.compose([Validators.required,Validators.min(0)])],
      'experiencemonths':[null,Validators.required],
      'resume':[null,Validators.required],
      'video':[null,Validators.required],
      'password':[null, Validators.compose([Validators.required, Validators.minLength(5)])]

    })

  }
  addPost(post)
  {
    this.email=post.email;
    this.name=post.name;
    this.mobno=post.mobno;
    this.password=post.password;
    this.experienceyear=post.experienceyear;
    this.experiencemonths=post.experiencemonths;
    this.resume=post.resume;
    this.video=post.video;
    this.forResumePath=this.resume;
    this.forResumePath=this.forResumePath.substr(this.forResumePath.lastIndexOf("\\") + 1);
    this.password=post.password;
    
    this.forVideoPath=this.video;
    this.forVideoPath=this.forVideoPath.substr(this.forVideoPath.lastIndexOf("\\") + 1);
    

    this.userlist.push({'email':this.email,'name':this.name,'mobno':this.mobno,'expY':this.experienceyear,
  'expM':this.experiencemonths,'resume':this.forResumePath,'video':this.forVideoPath,'password':this.password});
    localStorage.setItem("candidate", JSON.stringify(this.userlist));


    this.rForm.reset();
  }
  ngOnInit() {
    if(JSON.parse(localStorage.getItem('candidate'))!=null){
        this.userlist=JSON.parse(localStorage.getItem('candidate'));
    }
    else{
      this.userlist=new Array();
    }
  }

  

}
