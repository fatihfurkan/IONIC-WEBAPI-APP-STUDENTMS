import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherTab2PageRoutingModule } from './teacher-tab2-routing.module';

import { TeacherTab2Page } from './teacher-tab2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherTab2PageRoutingModule
  ],
  declarations: [TeacherTab2Page]
})
export class TeacherTab2PageModule {}
