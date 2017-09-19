import { child1Component } from './../input/child1.component';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-io-test',
  templateUrl: './io-test.component.html',
  styleUrls: ['./io-test.component.css'],
  inputs : ['childValue']
})
export class IoTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('value') childValue : string;

  

}
