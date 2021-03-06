import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  
  tabParams: string;
  name: string;
  role: string;
  userID: string;
  roleCode: string;

  constructor(private arouter: ActivatedRoute) {
    this.arouter.queryParams.subscribe(params => {

      if (params && params.USERID) {
        this.name = params.NAME;
        this.role = params.ROLENAME;
        this.roleCode = params.ROLECODE;
        this.userID = params.USERID;
        this.tabParams = "USERID=" + this.userID + "&ROLECODE=" + this.roleCode + "&ROLENAME=" + this.role + "&NAME=" + this.name;

      }
    })
  }
  ngOnInit() {
  }

}
