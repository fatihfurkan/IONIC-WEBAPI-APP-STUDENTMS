import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-tab3',
  templateUrl: './student-tab3.page.html',
  styleUrls: ['./student-tab3.page.scss'],
})
export class StudentTab3Page implements OnInit {


  course;
  gridlist;
  results: Observable<any>;
  list: Observable<any>;
  serviceBaseUrl: string;
  user: any = {};
  course1: any = {};
  name: string;
  role: string;
  userID: string;
  roleCode: string;
  tabParams: string;
  constructor(private http: HttpClient, private arouter: ActivatedRoute) {
    this.arouter.queryParams.subscribe(params => {

      if (params && params.USERID) {
        this.name = params.NAME;
        this.role = params.ROLENAME;
        this.roleCode = params.ROLECODE;
        this.userID = params.USERID;
        this.tabParams = "USERID="+this.userID+ "&ROLECODE="+this.roleCode+ "&ROLENAME=" +this.role+ "&NAME=" +this.name;

      }
    })
    this.course = [];
    this.serviceBaseUrl = "http://studentms-api.azurewebsites.net/";

    this.results = this.getCourse();

    this.results
      .subscribe(data => {

        for (let item of data) {
          this.course.push(item);
        }


      })
  }

  getCourse() {

    let apiUrl = `${this.serviceBaseUrl}api/Course/GetCourse`;
    return this.http.get(apiUrl);
  }

  search() {
    
    this.gridlist = [];
    let apiUrl = `${this.serviceBaseUrl}api/Course/GetCourseContent?COURSEID=${this.course1.ID}`;

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
