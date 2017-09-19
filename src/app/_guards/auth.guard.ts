import { Injectable } from '@angular/core';
import { Router, CanActivate,ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
             let roles = route.data["roles"] as Array<string>;
             console.log("roles", roles, roles[0], roles[1])
            
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        alert("you are not logged in")
        return false;
    }
}