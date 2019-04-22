import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Login } from './login.model';

@Injectable()

export class FormLoginService {
    private url = 'http://localhost:5000/api/auth/login';
    private userInfo = 'http://localhost:5000/api/auth/me';

    constructor(private http: HttpClient) {}

    postLoginUser(user: Login) {
        return this.http.post(this.url, user);
    }

    getUserRole(token) {
        localStorage.setItem('TOKEN_NUMBER', token);
        return this.http.get(this.userInfo, {headers: {'x-access-token': token}});
    }
}
