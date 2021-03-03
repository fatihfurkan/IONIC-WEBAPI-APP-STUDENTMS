import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email: string;
  password: string;
  serviceBaseUrl: string;
  results: Observable<any>;
  mydata: Array<any> = new Array<any>();
  constructor(private router: Router, private http: HttpClient, private alertController: AlertController) {

  }

  goPage() {
    this.serviceBaseUrl = "http://studentms-api.azurewebsites.net/";
    this.results = this.searchEntry(this.email, this.password);

    this.results
      .subscribe(data => {
        //console.log("ee", data);
        if (data[0]) {
          let nav: NavigationExtras = {
            queryParams: {
              USERID: data[0].USERID,
              ROLECODE: data[0].ROLECODE,
              ROLENAME: data[0].ROLENAME,
              NAME: data[0].NAME + " " + data[0].SURNAME
            }
          }

          this.email="";
          this.password="";
          this.router.navigate(['main'], nav);
        } else {
          this.presentAlert("Email veya şifrenizi yanlış girdiniz, lütfen tekrar deneyiniz.");
        }
      },
      error => 
       this.presentAlert(error))

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
  searchEntry(email: string, pass: string) {

    let apiUrl = `${this.serviceBaseUrl}api/User/GetUserByEmail?email=${email}&password=${pass}`;

    return this.http.get(apiUrl);
  }

}
