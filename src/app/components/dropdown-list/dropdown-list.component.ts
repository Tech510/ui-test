import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css']
})
export class DropdownListComponent implements OnInit {

  @Input() label: string;
  @Input() dropDownList: any[];
  @Output() selectedChoiceEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  getChoices(event: any) {
    this.selectedChoiceEvent.emit(event.target.value);
  }
}
