import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentTab2Page } from './student-tab2.page';

const routes: Routes = [
  {
    path: '',
    component: StudentTab2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentTab2PageRoutingModule {}
