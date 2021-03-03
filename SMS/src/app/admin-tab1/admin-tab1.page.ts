import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-tab1',
  templateUrl: './admin-tab1.page.html',
  styleUrls: ['./admin-tab1.page.scss'],
})
export class AdminTab1Page implements OnInit {

  roles;
  results: Observable<any>;
  serviceBaseUrl: string;
  user: any = {};
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

    this.roles = [];
    this.serviceBaseUrl = "http://studentms-api.azurewebsites.net/";

    this.results = this.getRoles();

    this.results
      .subscribe(data => {
        for (let item of data) {
          this.roles.push(item);
        }


      })
  }

  getRoles() {

    let apiUrl = `${this.serviceBaseUrl}api/Role/GetRoles`;
    return this.http.get(apiUrl);
  }

  save() {
    let apiUrl = `${this.serviceBaseUrl}api/User/InsertUser`;

    if (!this.user.NAME || !this.user.SURNAME || !this.user.PHONE || !this.user.ADDRESS
      || !this.user.EMAIL || !this.user.PASSWORD || !this.user.ROLEREF) {

      this.presentAlert("Kayıt Başarısız");
    }
    else {

      this.http.post(apiUrl, this.user).subscribe((res: any) => {

        this.presentAlert("Kayıt Başarılı");
      });
      this.user = {};
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
