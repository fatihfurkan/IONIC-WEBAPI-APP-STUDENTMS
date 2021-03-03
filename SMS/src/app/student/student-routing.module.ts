import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentPage } from './student.page';

const routes: Routes = [
  {
    path: 'student',
    component: StudentPage,
    children: [
      { path: 'student-tab1', 
      loadChildren: () => import('../student-tab1/student-tab1.module').then( m => m.StudentTab1PageModule) },
      { path: 'student-tab2',
      loadChildren: () => import('../student-tab2/student-tab2.module').then( m => m.StudentTab2PageModule) },
      { path: 'student-tab3',
      loadChildren: () => import('../student-tab3/student-tab3.module').then( m => m.StudentTab3PageModule) }
    ]
  },
  {
    path:'',
    redirectTo:'student/student-tab1',
    pathMatch:'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentPageRoutingModule {}
