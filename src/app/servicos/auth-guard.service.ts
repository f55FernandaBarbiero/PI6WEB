import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot, ){
        console.log('route.url: '+ route.url);
        console.log('route.root: '+ route.pathFromRoot);
        const response = this.authService.isAuthenticated();
        if (response)
            return response;
        this.router.navigate(['/acesso-negado']);
    }
}