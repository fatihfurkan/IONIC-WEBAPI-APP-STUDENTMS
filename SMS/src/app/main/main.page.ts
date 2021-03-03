import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  name: string;
  role: string;
  userID: string;
  roleCode: string;

  constructor(private arouter: ActivatedRoute, private router: Router, private elementRef: ElementRef) {

    this.elementRef.nativeElement.style.setProperty('--displayA', "block");
    this.elementRef.nativeElement.style.setProperty('--displayS', "block");
    this.elementRef.nativeElement.style.setProperty('--displayT', "block");

    this.arouter.queryParams.subscribe(params => {
      if (params && params.USERID) {
        this.name = params.NAME;
        this.role = params.ROLENAME;
        this.roleCode = params.ROLECODE;
        this.userID = params.USERID;

        if (params.ROLECODE == "T") {
          this.elementRef.nativeElement.style.setProperty('--displayA', "none");
        }
        else if (params.ROLECODE == "S") {
          this.elementRef.nativeElement.style.setProperty('--displayA', "none");
          this.elementRef.nativeElement.style.setProperty('--displayT', "none");
        }

      }
    })
  }


  goAdmin(id: string) {

    let nav: NavigationExtras = {
      queryParams: {
        USERID: this.userID,
        ROLECODE: this.roleCode,
        ROLENAME: this.role,
        NAME: this.name
      }
    }
    if (id == "1") {
      this.router.navigate(['student'], nav);
    }
    else if (id == "2") {
      this.router.navigate(['teacher'], nav);
    }
    else if (id == "3") {
      this.router.navigate(['admin'], nav);
    }
  }

  ngOnInit() {

  }

}
