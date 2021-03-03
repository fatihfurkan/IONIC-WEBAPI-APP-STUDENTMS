import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentTab3PageRoutingModule } from './student-tab3-routing.module';

import { StudentTab3Page } from './student-tab3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentTab3PageRoutingModule
  ],
  declarations: [StudentTab3Page]
})
export class StudentTab3PageModule {}
