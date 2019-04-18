import { Injectable } from '@angular/core';
import { Employee} from '../models/employee.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class FormPosterService {

    constructor(private http: HttpClient) {}

    private url =  'http://localhost:3100/postemployee';

    postCustomer(employee: Employee): Observable<any> {
        // console.log('getting data in service', employee);
        return this.http.post(this.url, employee);
    }
}

