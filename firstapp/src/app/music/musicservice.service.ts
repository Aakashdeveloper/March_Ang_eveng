import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private MusicUrl = 'https://ngmusicdb.herokuapp.com/api/getMusic';
  constructor(private _http: HttpClient) { }

  getArtist(): Observable<any[]> {
    return this._http.get<any[]>(`${this.MusicUrl}`);
  }
}
