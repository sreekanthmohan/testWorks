import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
  // inputs: ['parentValue']
  // outputs: ['childChanged']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() parentValue: string;
  @Output('childChange') childChanged = new EventEmitter<string>();
  @Input() inputValue: string;
  @Output('chInput') childInputChange = new EventEmitter

  onChange(value: string) {
    this.childChanged.emit(value)
  }

  onChag(value: string) {
  this.childInputChange.emit(value)
  }

}
