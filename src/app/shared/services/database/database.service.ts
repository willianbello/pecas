import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Moto } from '../../models/moto';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private http: HttpClient,
  ) {}

  getDataBaseJson(): Observable<Moto[]> {
    return this.http.get<Moto[]>(environment.urlDataBase);
  }
}
