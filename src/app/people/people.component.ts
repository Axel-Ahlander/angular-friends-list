import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: false,
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {

  @Input() name: string = "";
  @Output() addFav: EventEmitter<string> = new EventEmitter<string>();


  addToFav(){
    this.addFav.emit(this.name);
  }
}
