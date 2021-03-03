import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminPage,
    children: [
      { path: 'admin-tab1', 
      loadChildren: () => import('../admin-tab1/admin-tab1.module').then( m => m.AdminTab1PageModule) },
      { path: 'admin-tab2',
      loadChildren: () => import('../admin-tab2/admin-tab2.module').then( m => m.AdminTab2PageModule) }
    ]
  },
  {
    path:'',
    redirectTo:'admin/admin-tab1',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
