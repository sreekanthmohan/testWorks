import { data } from './../_services/check';
import { Component, OnInit, ChangeDetectorRef,Directive, ElementRef, Input} from '@angular/core';  
import { Student} from './student'; 
  import {StudentService} from './studentdata.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'
})
@Directive({ selector: '[myHighlight]' })
export class StudentComponent implements OnInit {

  private bsize : any ;
  private asize : any;
  private imageBackend : string;
  private imageLocal : string;
  private spinner : number = 0;

    model = {  
        rno: 0,  
        name: '',  
        mobile_no: '',  
        student_img: ''  
    };  
    path = '';  
    public file_srcs: string[] = [];  
    public debug_size_before: string[] = [];  
    public debug_size_after: string[] = [];  
    private n : number;
    constructor(private changeDetectorRef: ChangeDetectorRef, private studata: StudentService,el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }  
    ngOnInit() {
    }  
    fileChange(input) {  
        this.file_srcs = new Array;
        this.spinner = 1;
        this.readFiles(input.files); 
        console.log("input called") 
    }  
    readFile(file, reader, callback) { 
      console.log("readfile beg called") 
        reader.onload = () => {  
            callback(reader.result);  
            this.model.student_img = reader.result;  
            this.asize = this.model.student_img;
            console.log("read file end:");  
        }  
        reader.readAsDataURL(file);  
    }  
    readFiles(files, index = 0) {  
      console.log("read files called")
        // Create the file reader  
        let reader = new FileReader();  
        // If there is a file  
        if (index in files) {  
            // Start reading this file  
            this.readFile(files[index], reader, (result) => {  
                // Create an img element and add the image file data to it  
                var img = document.createElement("img");  
                img.src = result;  
                // Send this img to the resize function (and wait for callback) 
                // console.log("before resize", img.src)
                this.bsize = img.src
                 
                this.resize(img, 250, 250, (resized_jpeg, before, after) => {  
                    // For debugging (size in bytes before and after)  
                    this.debug_size_before.push(before);  
                    this.debug_size_after.push(after);  
                    // Add the resized jpeg img source to a list for preview  
                    // This is also the file you want to upload. (either as a  
                    // base64 string or img.src = resized_jpeg if you prefer a file).  
                    this.file_srcs.push(resized_jpeg);  
                    // Read the next file;  
                    this.readFiles(files, index + 1);  
                });  
            });  
        } else {  
            // When all files are done This forces a change detection  
            this.changeDetectorRef.detectChanges();  
            console.log("else called")
          this.spinner = 0;
        }  
    }  
    resize(img, MAX_WIDTH: number, MAX_HEIGHT: number, callback) { 
      console.log("resize called") 
        // This will wait until the img is loaded before calling this function  
        return img.onload = () => {  
            // Get the images current width and height  
            var width = img.width;  
            var height = img.height;  
            // Set the WxH to fit the Max values (but maintain proportions)  
            if (width > height) {  
                if (width > MAX_WIDTH) {  
                    height *= MAX_WIDTH / width;  
                    width = MAX_WIDTH;  
                }  
            } else {  
                if (height > MAX_HEIGHT) {  
                    width *= MAX_HEIGHT / height;  
                    height = MAX_HEIGHT;  
                }  
            }  
            // create a canvas object  
            var canvas = document.createElement("canvas");  
            // Set the canvas to the new calculated dimensions  
            canvas.width = width;  
            canvas.height = height;  
            var ctx = canvas.getContext("2d");  
            ctx.drawImage(img, 0, 0, width, height);  
            // Get this encoded as a jpeg  
            // IMPORTANT: 'jpeg' NOT 'jpg'  
            var dataUrl = canvas.toDataURL('image/jpeg');  
            // callback with the results  
            callback(dataUrl, img.src.length, dataUrl.length);  
        };  
    }  
    studentSubmit() {  
      // console.log("after resize", this.model.student_img)
              this.studata.addStudent(this.model)
        .subscribe(  
            data => {   
              console.log("resp", data);
              this.model = data;
              this.imageBackend = this.model.student_img;
              // this.imageLocal = localStorage.getItem('image')

            },  
            function(error) {  
                console.log(error);  
            },  
            function() {  
                console.log("On Complete");  
            });  
    }  

}
