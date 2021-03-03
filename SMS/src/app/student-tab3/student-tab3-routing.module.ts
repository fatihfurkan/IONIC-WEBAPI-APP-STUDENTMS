import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentTab3Page } from './student-tab3.page';

const routes: Routes = [
  {
    path: '',
    component: StudentTab3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentTab3PageRoutingModule {}
