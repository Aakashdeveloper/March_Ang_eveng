import { Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';


@Injectable()

export class RouterGaurdService implements CanActivate {
    token: string;

    constructor(private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot): boolean {
        this.token = localStorage.getItem('TOKEN_NUMBER');
        console.log('>my token>>>', this.token);
        if (this.token == null) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
