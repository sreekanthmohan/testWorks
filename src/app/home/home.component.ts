import { Hero } from './hero';
import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls : ['style.scss'],
    inputs:['activeColor','baseColor','overlayColor']
    
})
export class HomeComponent implements OnInit {
    users: User[] = [];
    private wrror : string;
    private iconColor : any;
    private borderColor : any;
    

    constructor(private userService: UserService) { }

    ngOnInit() {
        // get users from secure api end point
        this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
    }
     
 
  model = new Hero(18, 'Dr IQ', 'Chuck Overstreet');
 
//   submitted = false;
 
  onSubmit() { 
      console.log("console called")
      this.userService.postTest(this.model)
        .subscribe(
        inv => {
            this.model = inv;
          console.log('saved email credentials', inv);
        },
        err => {
            
          console.error('body', err._body);
          this.wrror = err._body;
        },
        () => console.debug('email credentials saved')
        );
     }
 
  newHero() {
    this.model = new Hero(42, '', '');
  }
 activeColor: string = 'green';
    baseColor: string = '#ccc';
    overlayColor: string = 'rgba(255,255,255,0.5)';
    
    dragging: boolean = false;
    loaded: boolean = false;
    imageLoaded: boolean = false;
    imageSrc: string = '';
    
    handleDragEnter() {
        this.dragging = true;
    }
    
    handleDragLeave() {
        this.dragging = false;
    }
    
    handleDrop(e) {
        e.preventDefault();
        this.dragging = false;
        this.handleInputChange(e);
    }
    
    handleImageLoad() {
        this.imageLoaded = true;
        this.iconColor = this.overlayColor;
    }

    handleInputChange(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

        var pattern = /image-*/;
        var reader = new FileReader();

        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }

        this.loaded = false;

        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    
    _handleReaderLoaded(e) {
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    }
    
    _setActive() {
        this.borderColor = this.activeColor;
        if (this.imageSrc.length === 0) {
            this.iconColor = this.activeColor;
        }
    }
    
    _setInactive() {
        this.borderColor = this.baseColor;
        if (this.imageSrc.length === 0) {
            this.iconColor = this.baseColor;
        }
    }

}