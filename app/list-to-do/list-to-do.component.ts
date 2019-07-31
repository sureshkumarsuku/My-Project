import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.scss']
})
export class ListToDoComponent implements OnInit {

  constructor() { }

  @Input() itemList: any; 

  public itemListToPopulate: any;


  markAsDone(ind, ev) {
    console.log('this.itemListToPopulate[ind].status', this.itemListToPopulate[ind].status)
    if (this.itemListToPopulate[ind].status) {
      this.itemListToPopulate[ind].status = false;
    } else {
      this.itemListToPopulate[ind].status = true
    }
    localStorage.setItem("toDoList", JSON.stringify(this.itemListToPopulate));
  }

  
  removeItem(ind) {
    this.itemListToPopulate.splice(ind, 1);
    localStorage.setItem("toDoList", JSON.stringify(this.itemListToPopulate));
  }



  ngOnInit() {
    this.itemListToPopulate = this.itemList;


  }

}
