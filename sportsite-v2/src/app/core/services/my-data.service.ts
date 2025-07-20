import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MyDataService {

    private apiUrl = 'http://localhost:3000/wo/read-complexes';  


   constructor(private http: HttpClient) {}

    getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

