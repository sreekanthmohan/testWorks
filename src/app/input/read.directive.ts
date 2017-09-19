import { Directive, ElementRef, Host } from '@angular/core';
@Directive({
    selector: '[color]',
    host: {
        '(mouseenter)': 'onMouseEnter($event.target)',
        '(mouseleave)': 'onMouseEnter($event.target)'
    }
})
export class RedDirective {
    private defaultColor: string = 'blue';
    constructor(private el: ElementRef) {
        this.el = el;
        this.setColor(this.defaultColor);
    }
    onMouseEnter() {
        this.setColor('green');
    }
    onMouseLeave() {
        this.setColor(this.defaultColor);
    }
    private setColor(color: string) {
        this.el.nativeElement.style.color = color;
    }
}