import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { DataService } from './data.service';
import { Item } from './item';

@Component({
  selector: 'items-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  items: Item[] = [];
  name: string = '';
  itemToEdit: Item = { id: null, name: ''};

  constructor(private dataService: DataService,
              public toastr: ToastsManager,
              vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit(): void {
    this.getItemsList();
  }

  getItemsList(): void {
    this.dataService.getItemsList().then(items => {
      this.items = items;
    });
  }

  anyItems(): boolean {
    return this.items && this.items.length > 0;
  }

  addItem(): void {
    let name = this.name.trim();

    if (!name) {
      this.toastr.warning('Item name is required.');
      return;
    }

    this.dataService.addItem(name).then(() => {
      this.toastr.success('Item was added.');

      this.name = '';
      this.itemToEdit = Object.assign({}, {id: null, name: ''});

      this.getItemsList();
    });
  }

  editItem(item): void {
    this.itemToEdit = Object.assign({}, item);
  }

  deleteItem(id): void {
    let isDeleteConfirm = confirm('Are you sure?');

    if (isDeleteConfirm) {
      this.dataService.deleteItem(id).then(() => {
        this.toastr.success('Item was removed.');

        this.getItemsList();
      });
    }
  }

  cancelClick(): void {
    this.itemToEdit = Object.assign({}, { id: null, name: ''});
  }

  saveItem(): void {
    let item = this.itemToEdit;

    if (!item.name.trim()) {
      this.toastr.warning('Item name is required.');
      return;
    }

    let isSaveConfirm = confirm('Are you sure?');

    if (isSaveConfirm) {
      this.dataService.editItem(item).then(() => {
        this.toastr.success('Item was updated.');

        this.itemToEdit = Object.assign({}, { id: null, name: ''});

        this.getItemsList();
      });
    }
  }
}
