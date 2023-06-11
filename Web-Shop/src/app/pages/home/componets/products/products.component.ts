import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'product-header',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Output() columnsCountChange=new EventEmitter<number>();
  sort = 'Desc';
  itemsShowCount=15
  constructor() {}

  ngOnInit(): void {}

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }
  onProductupdated(count:number):void{
    this.itemsShowCount=count;

  }
  onColumnUpDated(colNumber:number):void{
  this.columnsCountChange.emit(colNumber);
  }
}
