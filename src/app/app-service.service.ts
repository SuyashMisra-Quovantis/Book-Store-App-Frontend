import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  httpOptions = {
    headers: new HttpHeaders({}),
    withCredentials: true,
  };

  getData() {
    return this.http.get('/api/books', this.httpOptions);
  }

  getDataById(id: number) {
    return this.http.get(`/api/books/${id}`, this.httpOptions);
  }

  postData(form) {
    return this.http.post<any>('/api/books', form, this.httpOptions);
  }

  putData(form) {
    return this.http.put(`/api/books/${form.id}`, form, this.httpOptions);
  }

  deleteData(id: number) {
    const url = `/api/books/${id}`;
    return this.http.delete(url, this.httpOptions);
  }

  loginUser(form) {
    return this.http.post<any>('/api/users/login', form, this.httpOptions);
  }

  logoutUser() {
    return this.http.get<any>('/api/users/logout', this.httpOptions);
  }

  registerUser(form) {
    return this.http.post<any>('/api/users', form, this.httpOptions);
  }
}
