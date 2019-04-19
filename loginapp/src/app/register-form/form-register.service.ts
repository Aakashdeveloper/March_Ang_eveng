import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Register } from './register.model';
import { Observable } from 'rxjs';

@Injectable()

export class FormRegisterService {
    private url = 'http://localhost:5000/api/auth/register';

    constructor(private http: HttpClient) {}

    postUser(user: Register) {
        return this.http.post(this.url, user);
    }
}
