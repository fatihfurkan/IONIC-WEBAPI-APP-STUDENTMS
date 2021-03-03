import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherTab1PageRoutingModule } from './teacher-tab1-routing.module';

import { TeacherTab1Page } from './teacher-tab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherTab1PageRoutingModule
  ],
  declarations: [TeacherTab1Page]
})
export class TeacherTab1PageModule {}
