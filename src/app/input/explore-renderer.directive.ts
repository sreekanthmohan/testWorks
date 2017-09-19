import { Directive, Renderer, ElementRef, AnimationPlayer } from '@angular/core';
// import { AnimationStyles } from 
import { AnimationStyles,AnimationKeyframe } from '@angular/core';

@Directive({
    selector: '[exploreRenderer]'
})
export class ExploreRendererDirective {
    private nativeElement: Node;

    constructor(private renderer: Renderer, private element: ElementRef) {
        this.nativeElement = element.nativeElement;
    }
    
    func() {
        console.log("fn called")
        // alert("teting")
    }

    ngAfterContentInit() {
        // let check = this.renderer.invokeElementMethod
        let inputElement = this.renderer.createElement(this.nativeElement, "input");
        this.renderer.setElementAttribute(inputElement, "value", "hello");
        this.renderer.invokeElementMethod(inputElement, "focus");

        let buttonElement = this.renderer.createElement(this.nativeElement, "button");
        this.renderer.createText(buttonElement, "Click me!");
        this.renderer.setElementProperty(buttonElement, "disabled", false);
        this.renderer.listen(buttonElement, "click", (event) => console.log(event));
        this.renderer.setElementClass(buttonElement, "btn-large", true);
        this.renderer.setElementStyle(buttonElement, "backgroundColor", "yellow");

        // window/document/body
        this.renderer.listenGlobal("body", "click", () => console.log("Global event"));

         let buttontest = this.renderer.createElement(this.nativeElement, "button");
        this.renderer.createText(buttontest, "test!");
        this.renderer.setElementProperty(buttontest, "disabled", false);
        this.renderer.listen(buttontest, "click", () => alert("testing"));


        let input = this.renderer.selectRootElement("input");
        console.log(input);
    
        // projectNodes
        const pEleOne = this.renderer.createElement(this.nativeElement, "p");
        const pEleTwo = this.renderer.createElement(this.nativeElement, "p");
        this.renderer.createText(pEleOne, "Element one");
        this.renderer.createText(pEleTwo, "Element two");
        this.renderer.projectNodes(this.nativeElement, [pEleOne, pEleTwo]);

        this.renderer.attachViewAfter(inputElement, [pEleOne, pEleTwo]);

        // this.renderer.detachView([pEleTwo]);

        const startingStyles: AnimationStyles = {
            styles: [{}]
        }

        const keyframes: AnimationKeyframe[] = [
            {
                offset: 0,
                styles: {
                    styles: [{
                        transform: 'translateX(0px)',
                    }]
                }
            },
            {
                offset: 1,
                styles: {
                    styles: [{
                        transform: 'translateX(100px)',
                    }]
                }
            }]

        // const animation: AnimationPlayer = this.renderer.animate(buttonElement, startingStyles, keyframes, 3000, 1000, "ease");
        // animation.play();
        // animation.onDone(() => console.log('Animation complete'));

    }

}
