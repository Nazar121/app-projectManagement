import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AccountComponent } from './account.component';

const ROUTES: Routes = [
  { path: '', component: AccountComponent, children: [
    
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AccountRoutingModule { }
