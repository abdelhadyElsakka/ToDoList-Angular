import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @Input('items') items:string[] = [];

  // deleteItem(args:any) {
  //   args.stopPropagation();
  //   let deletedItem = args.target.parentElement.parentElement;
  //   this.items.(deletedItem);
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
