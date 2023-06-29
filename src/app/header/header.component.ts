import { Component, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  @Output() newItemEvent = new EventEmitter<string>();


  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }


}
