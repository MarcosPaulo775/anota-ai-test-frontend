import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../shared/models/item';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getList(): Observable<Item[]> {
    const listURL = `http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/cardlist.json`;
    return this.http.get<Item[]>(listURL);
  }
}
