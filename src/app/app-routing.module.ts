import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { UpdatesComponent } from './components/updates/updates.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AuthGuard } from './guard/auth.guard';
import { NothingComponent } from './components/nothing/nothing.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'services',component:ServicesComponent
  },
  {
    path:'updates',component:UpdatesComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'contactus',component:ContactUsComponent
  },
  {
    path:'authenticate',loadChildren: ()=> import('./featured/authenticate/authenticate.module').then((mod)=>mod.AuthenticateModule)
  },
  // {
  //    path:'**',component:NothingComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }