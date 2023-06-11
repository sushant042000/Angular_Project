import { Component, OnInit } from '@angular/core';
const ROW_HEIGHT:{[id:number]:number}={1:400,3:335,4:350};

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 cols=3;
 rowHeight=ROW_HEIGHT[this.cols];
 category:string | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  columnCountChange(colNumber:number):void
  {
    this.cols=colNumber;

  }
  showCategory(newCateGory:string):void{
    this.category=newCateGory;
    this.rowHeight=ROW_HEIGHT[this.cols];

  }

}
