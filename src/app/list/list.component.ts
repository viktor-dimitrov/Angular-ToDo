import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  @Input('list') list: { title: string, completed: boolean }[] = [];

    isPopup: boolean = false;
    editedItemTitle: string = '';

  onComplete(itemTitle: string) {
    this.list.map(item => item.title === itemTitle ? item.completed = !item.completed : item);
  }

  onDelete(itemTitle: string) {
    const index = this.list.findIndex((item) => {
      return item.title === itemTitle;
    })
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }

  onEditClick(itemTitle: string, editInput: HTMLInputElement) {
    this.isPopup = true;
    this.editedItemTitle = itemTitle;
    editInput.value = itemTitle;
  }

  onCancelEdit() {
    this.isPopup = false;
  }

  onUpdateEdit(editInput: string) {
    const index = this.list.findIndex((item) => {
      return item.title === this.editedItemTitle;
    })
    this.list.map(item => item.title == this.editedItemTitle ? item.title = editInput : item);
    this.isPopup = false;
  }


}
