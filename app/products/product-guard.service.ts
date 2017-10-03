import {Injectable} from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,Router} from '@angular/router';

@Injectable()

export class ProductGuard implements CanActivate{
    constructor(private _router:Router){

    }
    canActivate(route:ActivatedRouteSnapshot):boolean{
        let id = +route.url[1].path;
        if(id<0 || isNaN(id)){
            alert("invalid Id");
            this._router.navigate(['/products']);
            return false;
        }
        return true;
    }
}