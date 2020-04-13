import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Subject, Observable, BehaviorSubject} from 'rxjs';
import {Farm} from './farm';

@Injectable()
export class SelectedFarmService {
  private idSource = new BehaviorSubject<string>("default id");
  apiUrl = '';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    "secret-key": "$2b$10$dIr8SeGEmi1jQ3Eyq1pPieCzL4UNY6zGHGhEayfSbjQE.FT32l7IS" })
  };

  currentId = this.idSource.asObservable();

  constructor( private http: HttpClient) { }

  changeId(id: string){
    this.apiUrl = 'https://api.jsonbin.io/b/'+ id;
    const res = this.http.get<Farm>(this.apiUrl, this.httpOptions).subscribe((response: any) => {
      this.idSource.next(response);
      
      let card = document.getElementById("card-farm");
      card.classList.remove("load-anim");
      card.classList.add("load-done");
    });
  }

}