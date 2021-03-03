import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-teacher-tab2',
  templateUrl: './teacher-tab2.page.html',
  styleUrls: ['./teacher-tab2.page.scss'],
})
export class TeacherTab2Page implements OnInit {

  
  course;
  gridlist;
  results: Observable<any>;
  list: Observable<any>;
  serviceBaseUrl: string;
  courseDetail: any = {};
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
    let apiUrl = `${this.serviceBaseUrl}api/Course/InsertCourseDetail`;

    if (!this.courseDetail.COURSEID || !this.courseDetail.CONTENTDETAIL || !this.courseDetail.LINK) {

      this.presentAlert("Kayıt Başarısız");
    }
    else {

      this.courseDetail.USERID = this.userID;
      //console.log(this.courseDetail);
      this.http.post(apiUrl, this.courseDetail).subscribe((res: any) => {

        this.presentAlert("Kayıt Başarılı");
      });
      this.courseDetail = {};
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