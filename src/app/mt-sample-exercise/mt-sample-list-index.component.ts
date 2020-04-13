import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { SelectedFarmService } from './selected-farm.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Farm } from './farm';

@Component({
  selector: 'mt-sample-list',
  templateUrl: './mt-sample-list-index.component.html'
})
export class MtSampleListIndexComponent implements OnInit {
  farms: Farm[] = [];
  id: string;

  ngOnInit(){
    this.FarmService.currentId.subscribe(response => this.id = response)
  }

  constructor(private FarmService: DataService, private SelectedFarm: SelectedFarmService) {
    this.getFarms();
  }

  getFarms(): void {
    this.FarmService.getFarms().
    subscribe(farms => { this.farms = farms });
  }

  newId(id){
    let card = document.getElementById("card-farm");
    card.classList.add("load-anim");
    this.SelectedFarm.changeId(id);

  }



}