import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
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

  rForm: FormGroup;
  post: any;
  email: string = "";

  password: string = "";
  wrongCredentialsMsg="";

  public isSelectedAdd=true;
  public isSelectedAssign=false;
  public isSelectedStatus=false;
  constructor(private fb:FormBuilder) {
    this.rForm = fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],


    })

   }


  addPost(post) {
    this.email = post.email;
    this.password = post.password;
    console.log("e:"+post.email);
    console.log("p:"+post.password);
    if(this.email=='admin@gmail.com' && this.password=='admin'){
      this.success=true;
    }
    else{
      this.wrongCredentialsMsg="Wrong login credentials!";
        this.success=false;
    }
    this.rForm.reset();


  }



  ngOnInit() {
  }
  public clickedAdd(){
  this.isSelectedAdd=true;
  this.isSelectedAssign=false;
  this.isSelectedStatus=false;

}
public clickedAssign(){
  this.isSelectedAdd=false;
  this.isSelectedAssign=true;
  this.isSelectedStatus=false;

}
public clickedStatus(){
  this.isSelectedAdd=false;
  this.isSelectedAssign=false;
  this.isSelectedStatus=true;

}

seterrormsg(){
  this.wrongCredentialsMsg="";
}
}
