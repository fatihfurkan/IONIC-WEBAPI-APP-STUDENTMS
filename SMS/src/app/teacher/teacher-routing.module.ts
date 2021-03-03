import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherPage } from './teacher.page';

const routes: Routes = [
  {
    path: 'teacher',
    component: TeacherPage,
    children: [
      { path: 'teacher-tab1', 
      loadChildren: () => import('../teacher-tab1/teacher-tab1.module').then( m => m.TeacherTab1PageModule) },
      { path: 'teacher-tab2',
      loadChildren: () => import('../teacher-tab2/teacher-tab2.module').then( m => m.TeacherTab2PageModule) }
    ]
  },
  {
    path:'',
    redirectTo:'teacher/teacher-tab1',
    pathMatch:'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherPageRoutingModule {}
