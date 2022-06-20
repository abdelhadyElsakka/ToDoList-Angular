import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.scss']
})
export class InputTaskComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();



  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  
  constructor() { }

  ngOnInit(): void {

    
   
  }

}
