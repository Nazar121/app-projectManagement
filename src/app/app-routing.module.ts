import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

// services
import { AuthGuardService } from './shared/services/auth-guard.service';

const ROUTES: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  { path: 'account', loadChildren: './account/account.module#AccountModule', canActivate: [ AuthGuardService ] },
  // { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
