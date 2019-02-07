import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-candidate-login',
  templateUrl: './candidate-login.component.html',
  styleUrls: ['./candidate-login.component.css']
})
export class CandidateLoginComponent implements OnInit {
  statusAssigned: any;
  candidates:any;
  interviewer:any;
  candidateslist:any;
  datelist:any;
  timelist:any;
  // listshow=[];
  
  success:boolean;
  updatedMarks:boolean;
  candidatename:string="";
  scheduleddate:string="";
  scheduledtime:string="";
  interviewername:string="";
  result:string=""
  colorsuccess:boolean;
  colorfail:boolean;
  marks:String="Yet to be Declared!";

  rForm: FormGroup;
  post: any;
  email: string = "";

  password: string = "";
  wrongCredentialsMsg="";

  constructor(private fb:FormBuilder) {
    this.rForm = fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],


    })

   }
   addPost(post) {
    this.email = post.email;
    this.password = post.password;


    for(var i=0;i<this.candidates.length;i++){
      
      if(this.candidates[i].email==this.email && this.candidates[i].password==this.password)
      {
        this.candidatename=this.candidates[i].name;


        for(var j=0;j<this.statusAssigned.length;j++)
        {
          if(this.statusAssigned[j].candidateName==this.candidates[i].name)
          {
      
            
            this.scheduleddate=this.statusAssigned[j].date;
            this.scheduledtime=this.statusAssigned[j].time;
            this.interviewername=this.statusAssigned[j].interviewerName;
            if(this.statusAssigned[j].evaluationDone)
            {
              this.marks=this.statusAssigned[j].marks;
            }
            
            //this.listshow.push({'interviewerName':this.statusAssigned[j].interviewerName,'date':this.statusAssigned[j].date,'time':this.statusAssigned[j].time});
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

    if(this.marks=='Yet to be Declared!'||this.marks=='N/A'){
      this.result='Yet to be Declared!';
    }
    else{
      this.result=this.marks.substr(0,this.marks.indexOf("/"));
      var y=+this.result;
      if(y>=8){
        this.result='Congrates! You are Selected';
        this.colorsuccess=true;
        this.colorfail=false;
      }
      else{
        this.result='Sorry! You may leave for the day';
        this.colorsuccess=false;
        this.colorfail=true;
      }
      // console.log("rees:"+y);
    }


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
    
    for(var i=0;i<this.statusAssigned.length;i++)
    {
 
     if(this.statusAssigned[i].candidateName==nameofcandidate){
       console.log("matched:"+comingMarks);
       this.statusAssigned[i].marks=comingMarks;
       localStorage.setItem("assigned", JSON.stringify(this.statusAssigned));
       //this.updatedMarks=true;
     }
    }
   }

   seterrormsg(){
     this.wrongCredentialsMsg="";
    
   }



}
