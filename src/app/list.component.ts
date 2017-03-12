import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Item } from './item';

@Component({
  selector: 'items-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  items: Item[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getItemsList();
  }

  getItemsList(): void {
    this.dataService.getItemsList().then(items => {
      this.items = items;
    });
  }
}
