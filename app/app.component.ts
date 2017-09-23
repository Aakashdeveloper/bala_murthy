import {Component} from '@angular/core';
import {ProductService} from './products/product.service';

@Component({
	selector:'pm-app',
	template:`<div><h1>This is angulr layout</h1>
	<pm-product></pm-product>
	<bala-murthy></bala-murthy>

	</div>`,
	providers:[ProductService]
})

export class AppComponent{

}