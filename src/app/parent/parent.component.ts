import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  items:string[]=[];

  addItem(newItem: string) {
    this.items.push(newItem);
    console.log(this.items);
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
