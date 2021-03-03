import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-tab2',
  templateUrl: './student-tab2.page.html',
  styleUrls: ['./student-tab2.page.scss'],
})
export class StudentTab2Page implements OnInit {


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

  save() {

    if (!this.course1.COURSEID ) {

      this.presentAlert("Kayıt Başarısız");
    }
    else {
    this.course1.USERID = this.userID;
    let apiUrl = `${this.serviceBaseUrl}api/Course/InsertUserCourse`;

    console.log("ee", this.course1);
    this.http.post(apiUrl, this.course1).subscribe((res: any) => {

      this.presentAlert("Kayıt Başarılı");
    });
    this.course1 = {};
  }
  }

  
  async presentAlert(message: string) {

    const alert = await this.alertController.create({
      header: message,
      subHeader: '',
      message: '',
      buttons: ['OK']
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
