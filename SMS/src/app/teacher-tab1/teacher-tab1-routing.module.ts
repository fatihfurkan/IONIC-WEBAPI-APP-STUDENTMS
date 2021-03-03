import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherTab1Page } from './teacher-tab1.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherTab1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherTab1PageRoutingModule {}
