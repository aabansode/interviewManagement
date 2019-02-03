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
  video:string="";
  id:number;
  
  constructor(private fb:FormBuilder) { 
    this.rForm=fb.group({
      'name': [null, Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
      'email':[null,Validators.compose([Validators.required,Validators.email])],
      'mobno':[null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
      'experienceyear':[null,Validators.compose([Validators.required,Validators.min(0)])],
      'experiencemonths':[null,Validators.required],
      'resume':[null,Validators.required],
      'video':[null,Validators.required]

    })

  }
  addPost(post)
  {
    this.email=post.email;
    this.name=post.name;
    this.mobno=post.mobno;
    this.experienceyear=post.experienceyear;
    this.experiencemonths=post.experiencemonths;
    this.resume=post.resume;
    this.video=post.video;
    


    
    this.userlist.push({id:5,name:'vvv',email:'qqq',mobile:'fvvfvf',expY:'cddc',expM:'fvf',resume:'cd',video:'vvv'});
    localStorage.setItem("candidates", JSON.stringify(this.userlist));

  }
  ngOnInit() {
  }

  

}
// export class Users{
//   id:number;
//   name:string;
//   email:string;
//   mobile:string;
//   expY:string;
//   expM:string;
//   resume:string;
//   video:string;

// }
