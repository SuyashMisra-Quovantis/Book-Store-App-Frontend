import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('/api/books');
  }

  getDataById(id: number) {
    return this.http.get(`/api/books/${id}`);
  }

  postData(form) {
    return this.http.post<any>('/api/books', form, httpOptions);
  }

  putData(form) {
    return this.http.put(`/api/books/${form.id}`, form, httpOptions);
  }

  deleteData(id: number) {
    const url = `/api/books/${id}`;
    return this.http.delete(url, httpOptions);
  }
}
