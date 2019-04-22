import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterGaurdService } from './auth.register.gaurd.service';
import { RouterGaurdService } from './auth.gaurd.service';




const routes: Routes = [
    {path: 'register', canActivate: [RegisterGaurdService], component: RegisterFormComponent},
    {path: 'profile', canActivate: [RouterGaurdService], component: ProfileComponent},
    {path: 'login', component: LoginFormComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    providers: [RouterGaurdService, RegisterGaurdService],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
