import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import { Farm } from './farm';

@Injectable()
export class DataService {
  apiUrl = 'https://api.jsonbin.io/b/5e938f28e41a7f4da62c047d/3'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    "secret-key": "$2b$10$dIr8SeGEmi1jQ3Eyq1pPieCzL4UNY6zGHGhEayfSbjQE.FT32l7IS" })
  };

  private idSource = new BehaviorSubject<string>("");

  currentId = this.idSource.asObservable();

  constructor( private http: HttpClient) { }

  getFarms(): Observable<Farm[]> {
    return this.http.get<Farm[]>(this.apiUrl, this.httpOptions)
  }

  changeId(id: string){
    this.idSource.next(id)
  }

}

