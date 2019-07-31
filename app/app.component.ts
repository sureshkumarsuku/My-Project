import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent implements OnInit {
  title = 'toDoApp';
  public itemsList: any = [];
  public itemListObj: any;
  
  addToList(elem) {
    this.itemListObj = {
      desc: elem.itemToAdd,
      status: false
    }
    this.itemsList.push(this.itemListObj);
    localStorage.setItem("toDoList", JSON.stringify(this.itemsList));
  }



  ngOnInit() {
    let lsItems = localStorage.getItem("toDoList");
    if (lsItems) {
      this.itemsList = JSON.parse(lsItems);
    }
  }
}
