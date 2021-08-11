import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Responsavel } from '../models/responsavel';


@Injectable({
  providedIn: 'root'
})
export class ResponsavelService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { 

  }

  findAll(): Observable<Responsavel[]>{
    const url = this.baseUrl + "/responsavel";
    return this.http.get<Responsavel[]>(url);
  }
}
