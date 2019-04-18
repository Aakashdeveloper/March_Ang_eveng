import {Component} from '@angular/core';
import { Employee } from '../models/employee.model';
import { NgForm} from '@angular/forms';
import { FormPosterService } from '../service/formPoster.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html'
})

export class EmployeeFormComponent {
    languages: any[] = ['Node', 'Angular', 'React', 'Mongo'];
    model = new Employee('John', 'Bill', 'a@a.com', '1234', true, 'male' , 'Angular');

    hasCodeLangError: Boolean = false;

    constructor(private formPosterService: FormPosterService) {}

    firstToUpper(name: string): void {
        if (name.length > 0) {
            this.model.firstname = name.charAt(0).toUpperCase() + name.slice(1);
        } else {
            this.model.firstname = name;
        }
    }

    validateCodelang(event: string): void {
        if (this.model.codelang === 'default') {
            this.hasCodeLangError = true;
        } else {
            this.hasCodeLangError = false;
        }
    }

    formSubmit(form: NgForm) {
        this.formPosterService.postCustomer(form.value)
            .subscribe((res) => console.log('Data submitted'));
    }
}
