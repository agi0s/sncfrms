import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { User } from 'src/app/models/users.model';
import { Group } from 'src/app/models/group.model';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get<User[]>(`/users/users`);
    };
  
    getGroups() {
        return this.http.get<Group[]>(`/users/groups`);
    };

    addGroup(group) {
        return this.http.post(`/users/addgroup`, group);
    }

    addUser(user) {
        return this.http.post(`/users/adduser`, user);
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        }
    } 
}