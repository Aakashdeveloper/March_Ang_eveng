import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder,
        Validators, AbstractControl} from '@angular/forms';

function ratingRange(min: number, max: number) {
    return(c: AbstractControl): {[key: string]: boolean } | null => {
        if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
            return {range: true};
        }
        return null;
    };
}
@Component({
    selector: 'app-reactive',
    templateUrl: './employee.component.html'
})

export class EmployeeFormComponent implements OnInit {
    employeeForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.employeeForm = this.fb.group({
            firstName: ['sdgg', [Validators.required, Validators.minLength(3)]],
            lastName:  ['Bill', [Validators.required, Validators.maxLength(5)]],
            email:  ['a@a', [Validators.required, Validators.pattern('[0-9a-zA-Z]+@[a-zA-Z0-9]+')]],
            phone: [''],
            notification: [],
            Rating: ['', [Validators.required, ratingRange(1, 5)]]
        });
    }

    setNotification(notifyVia: string): void {
        const phoneControl = this.employeeForm.get('phone');
        if (notifyVia === 'phone') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    }
}
