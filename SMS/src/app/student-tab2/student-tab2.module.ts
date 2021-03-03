import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentTab2PageRoutingModule } from './student-tab2-routing.module';

import { StudentTab2Page } from './student-tab2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentTab2PageRoutingModule
  ],
  declarations: [StudentTab2Page]
})
export class StudentTab2PageModule {}
