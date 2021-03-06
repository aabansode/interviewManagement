import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-interviewer',
  templateUrl: './add-interviewer.component.html',
  styleUrls: ['./add-interviewer.component.css']
})
export class AddInterviewerComponent implements OnInit {

  interviewerlist:any;
  rForm: FormGroup;
  post: any;
  email:string="";
  name:string="";
  password:string="";
  role:string="";


  constructor(private fb:FormBuilder) {
    this.rForm=fb.group({
      'name': [null, Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z. ]+$')])],
      'email':[null,Validators.compose([Validators.required,Validators.email])],
      'password':[null,Validators.compose([Validators.required, Validators.minLength(5)])],
      'role':[null,Validators.required]

    })

   }
   addPost(post)
   {
     this.email=post.email;
     this.name=post.name;
     this.password=post.password;
     this.role=post.role;

     this.interviewerlist.push({'email':this.email,'name':this.name,'password':this.password,'role':this.role});
    localStorage.setItem("interviewer", JSON.stringify(this.interviewerlist));

    this.rForm.reset();

   }
  ngOnInit() {
    if(JSON.parse(localStorage.getItem('interviewer'))!=null){
      this.interviewerlist=JSON.parse(localStorage.getItem('interviewer'));
  }
  else{
    this.interviewerlist=new Array();
  }

  }

}
