import { AuthenticationService } from './../_services/authentication.service';
import { Component, OnInit, Renderer, ViewChild } from '@angular/core';
import { Directive, ElementRef, AnimationPlayer } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @ViewChild('enable') enable: ElementRef;
  @ViewChild('test') test: ElementRef;
  private value: number = 10
  private nativeElement: Node;
  countDown;
  count = 6;
  public g: number = 6;
  private i: number = 0;


  constructor(private renderer: Renderer, private element: ElementRef, private authServc: AuthenticationService, private router: Router) {
    this.nativeElement = element.nativeElement;
  }

  ngOnInit() {
    // let test = this.renderer
    // this.renderer.createText(this.test.nativeElement, "test!");


    for (this.i; this.i < 2; this.i++) {
      setTimeout(() => {
        this.g--;
        console.log("g", this.g)
        console.log("i", this.i)
        if (this.g == 0) {
          this.test.nativeElement.click();
          this.no()
         
        }
        if (this.g > 6) {
          this.check();
        }

      }, 1000 * (this.i + 1));
    }

    // setTimeout(() => {
    //   this.enable.nativeElement.click();
    // }, 2000);
  }

  check() {

    
  }

  no() {
    console.log("clicked no")
    // this.countDown = Observable.timer(0, 1000)
    //   .take(this.count)
    //   .map(() => --this.count)
    this.test.nativeElement.click();
    this.authServc.logout();
    this.router.navigate(['/login']);
    alert("logout successful")
    // setTimeout(() => {
    //   this.test.nativeElement.click();
    //   console.log("time out");

    // }, 5000);
  }

  yes() {
    this.test.nativeElement.click();
    this.g = 10;
    // setTimeout(() => {
    //   this.no();      
    // }, 2000);
  }
}
