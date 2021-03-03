import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherTab2Page } from './teacher-tab2.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherTab2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherTab2PageRoutingModule {}
