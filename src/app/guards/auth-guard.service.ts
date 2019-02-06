import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from "@angular/router";

import { AuthenticationService } from "../services/authentication.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            return true;
        }

        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}})
        return false
    }
}