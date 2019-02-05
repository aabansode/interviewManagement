import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
statusAssigned:any;
  constructor() { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('assigned'))!=null){
      this.statusAssigned=JSON.parse(localStorage.getItem('assigned'));
  }
  else{
    this.statusAssigned=new Array();
  }

  }

}
