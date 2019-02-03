import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  public isSelectedAdd=true;
  public isSelectedAssign=false;
  public isSelectedStatus=false;
  constructor() { }

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
}
