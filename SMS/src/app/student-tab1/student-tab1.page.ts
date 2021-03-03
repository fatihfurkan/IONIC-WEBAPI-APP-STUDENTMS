import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-tab1',
  templateUrl: './student-tab1.page.html',
  styleUrls: ['./student-tab1.page.scss'],
})
export class StudentTab1Page implements OnInit {

  gridlist;
  list: Observable<any>;
  serviceBaseUrl: string;
  course1: any = {};
  name: string;
  role: string;
  userID: string;
  roleCode: string;
  tabParams: string;
  constructor(private http: HttpClient, private alertController: AlertController,private arouter: ActivatedRoute) {
    this.arouter.queryParams.subscribe(params => {

      if (params && params.USERID) {
        this.name = params.NAME;
        this.role = params.ROLENAME;
        this.roleCode = params.ROLECODE;
        this.userID = params.USERID;
        this.tabParams = "USERID="+this.userID+ "&ROLECODE="+this.roleCode+ "&ROLENAME=" +this.role+ "&NAME=" +this.name;

      }
    })
    this.serviceBaseUrl = "http://studentms-api.azurewebsites.net/";

    this.search();
  }


  search() {
    
    this.gridlist = [];
    let apiUrl = `${this.serviceBaseUrl}api/Course/GetCourse`;

    this.list = this.http.get(apiUrl);

    this.list
    .subscribe(data => {
      for (let item of data) {
        this.gridlist.push(item);
      }


    })
  }

  ngOnInit() {
  }

}

