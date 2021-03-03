import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-tab2',
  templateUrl: './admin-tab2.page.html',
  styleUrls: ['./admin-tab2.page.scss'],
})
export class AdminTab2Page implements OnInit {

  serviceBaseUrl: string;
  course: any = {};
  name: string;
  role: string;
  userID: string;
  roleCode: string;
  tabParams: string;
  constructor(private http: HttpClient, private alertController: AlertController,private arouter: ActivatedRoute) {
    this.serviceBaseUrl = "http://studentms-api.azurewebsites.net/";

    this.arouter.queryParams.subscribe(params => {

      if (params && params.USERID) {
        this.name = params.NAME;
        this.role = params.ROLENAME;
        this.roleCode = params.ROLECODE;
        this.userID = params.USERID;
        this.tabParams = "USERID="+this.userID+ "&ROLECODE="+this.roleCode+ "&ROLENAME=" +this.role+ "&NAME=" +this.name;

      }
    })
  }

  save() {

    if (!this.course.NAME || !this.course.FEES || !this.course.DURATION) {

      this.presentAlert("Kayıt Başarısız");
    }
    else {
    let apiUrl = `${this.serviceBaseUrl}api/Course/InsertCourse`;

    this.http.post(apiUrl, this.course).subscribe((res: any) => {

      this.presentAlert("Kayıt Başarılı");
    });
    this.course = {};
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
