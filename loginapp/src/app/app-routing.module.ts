import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginFormComponent } from './login-form/login-form.component';




const routes: Routes = [
    {path: 'register', component: RegisterFormComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginFormComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    providers: [],
    exports: [RouterModule]
})

export class AppRoutingModule {
}