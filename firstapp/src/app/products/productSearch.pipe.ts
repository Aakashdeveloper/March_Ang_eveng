import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product.model';

@Pipe({
    name: 'productSearch'
})

export class ProductSearch implements PipeTransform {
    transform(value: IProduct[], userInput: string) {
        userInput = userInput ? userInput.toLowerCase() : null;
        return userInput ? value.filter((product) =>
            ((product.productName.toLowerCase().indexOf(userInput) !== -1) ||
            (product.productCode.toLowerCase().indexOf(userInput) !== -1)
            )) : value;
    }
}





/*

var ages = [32, 33, 16, 40];

ages.filter(
  	(age) => { return age >= 18 }
  );
*/
