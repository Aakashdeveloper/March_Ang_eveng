import {Component} from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html'
})

export class EmployeeFormComponent {
    languages: any[] = ['Node', 'Angular', 'React', 'Mongo'];
    model = new Employee('John', 'Bill', 'a@a.com', '1234', true, 'male' , 'Angular');

    firstToUpper(name: string): void {
        if (name.length > 0) {
            this.model.firstname = name.charAt(0).toUpperCase() + name.slice(1);
        } else {
            this.model.firstname = name;
        }
    }
}
