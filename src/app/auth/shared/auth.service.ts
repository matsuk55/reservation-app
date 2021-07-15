import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    // getProducts(): Observable<any> {
    //     return this.http.get('/api/v1/products');
    // }

    // getProductById(productId:string): Observable<any> {
    //     return this.http.get('/api/v1/products/'+productId);
    // }
}