import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    ulr: string = 'http://localhost:3000/';

    constructor(private http: HttpClient) {}

    login(username: string, password: string) {
        return this.http.post<any>(`${this.ulr}users/auth`, { username: username, password: password })
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                return user;
            }));
    }

    logout() {
        window.localStorage.clear();
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(`${operation} failed: ${error.message}`); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result as T);
        }
    }
}

