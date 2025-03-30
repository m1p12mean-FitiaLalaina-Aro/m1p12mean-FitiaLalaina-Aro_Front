import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',loadComponent:()=>import('./home/home.component').then(m => m.HomeComponent)},
    {path:'login',loadComponent:()=>import('./login/login.component').then(m => m.LoginComponent)},
    {path:'register',loadComponent:()=>import('./register/register.component').then(m => m.RegisterComponent)},
    {path:'**',loadComponent:()=>import('./notfound/notfound.component').then(m => m.NotfoundComponent)},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }