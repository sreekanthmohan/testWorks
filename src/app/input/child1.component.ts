import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
    selector: 'input-child',
    template: ` `
})

export class child1Component {
    @Input() counterValue = 10;
    @Output() counterChange = new EventEmitter();
    increment() {
        this.counterValue++;
        this.counterChange.emit({
            value: this.counterValue
        })
    }
    decrement() {
        this.counterValue--;
        this.counterChange.emit({
            value: this.counterValue
        })
    }
}