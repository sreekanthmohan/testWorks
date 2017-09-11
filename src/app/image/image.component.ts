import { Component, NgZone, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Ng2ImgToolsService } from 'ng2-img-tools';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent  {

 resizedImage:string=null;
  compressedImage:string=null;
  selectedImage:string=null;
  croppedImage:string=null;
  resizedExactCroppedImage:string=null;
  resizedExactFilledImage:string=null;
  resizedImageTrusted:SafeUrl=null;
  compressedImageTrusted:SafeUrl=null;
  selectedImageTrusted:SafeUrl=null;
  croppedImageTrusted:any=null;
  resizedExactCroppedImageTrusted:any=null;
  resizedExactFilledImageTrusted:any=null;
  constructor(private ng2ImgToolsService: Ng2ImgToolsService, private sanitizer: DomSanitizer, private zone: NgZone) {
  }
  public fileChange(event: any){
    if(event.currentFiles.length>0){
      this.processFile(event.currentFiles[0]);
    }
  }
  private processFile(file:File){
      if(this.resizedImage !== null){
        window.URL.revokeObjectURL(this.resizedImage);
      }
      if(this.compressedImage !== null){
        window.URL.revokeObjectURL(this.compressedImage);
      }
      if(this.selectedImage !== null){
        window.URL.revokeObjectURL(this.selectedImage);
      }
      if(this.croppedImage !== null){
        window.URL.revokeObjectURL(this.croppedImage);
      }
      if(this.resizedExactCroppedImage !== null){
        window.URL.revokeObjectURL(this.resizedExactCroppedImage);
      }
      if(this.resizedExactFilledImage !== null){
        window.URL.revokeObjectURL(this.resizedExactFilledImage);
      }
      this.resizedImage="processing";
      this.compressedImage="processing";
      this.croppedImage="processing";
      this.resizedExactCroppedImage="processing";
      this.resizedExactFilledImage="processing";
      this.selectedImage=window.URL.createObjectURL(file);
      this.selectedImageTrusted=this.sanitizer.bypassSecurityTrustUrl(this.selectedImage);
      this.compressImage(file);
      this.resizeImage(file);
      this.cropImage(file);
      this.resizeExactCropImage(file);
      this.resizeExactFillImage(file);
  }
  private compressImage(file:File){
    console.info("Starting compression for file:", file);
    this.ng2ImgToolsService.compress([file], 2).subscribe( result =>{
        console.log("Compression result:", result);
        //all good
        this.compressedImage=window.URL.createObjectURL(result);
        this.compressedImageTrusted=this.sanitizer.bypassSecurityTrustUrl(this.compressedImage);
       }, error => {
            console.error("Compression error:", error);
       }
    );
  }
  private resizeImage(file:File){
    console.info("Starting resize for file:", file);
    this.ng2ImgToolsService.resize([file], 400, 500).subscribe( result =>{
        console.log("Resize result:", result);
        //all good
        this.resizedImage=window.URL.createObjectURL(result);
        this.resizedImageTrusted=this.sanitizer.bypassSecurityTrustUrl(this.resizedImage);
       }, error => {
            console.error("Resize error:", error);
       }
    );
  }
  private cropImage(file:File){
    console.info("Starting crop for file:", file);
    this.ng2ImgToolsService.crop([file], 400, 500).subscribe( result =>{
        console.log("Crop result:", result);
        //all good
        this.croppedImage=window.URL.createObjectURL(result);
        this.croppedImageTrusted=this.sanitizer.bypassSecurityTrustUrl(this.croppedImage);
       }, error => {
            console.error("Cropping error:", error);
       }
    );
  }
  private resizeExactCropImage(file:File){
    console.info("Starting resize exact crop for file:", file);
    this.ng2ImgToolsService.resizeExactCrop([file], 180, 100).subscribe( result =>{
        console.log("Resize exact crop result:", result);
        //all good
        this.zone.run(()=>{
          this.resizedExactCroppedImage=window.URL.createObjectURL(result);
          this.resizedExactCroppedImageTrusted=this.sanitizer.bypassSecurityTrustUrl(this.resizedExactCroppedImage);
        });
       }, error => {
            console.error("Resize exact crop error:", error);
       }
    );
  }
  private resizeExactFillImage(file:File){
    console.info("Starting resize exact fill for file:", file);
    this.ng2ImgToolsService.resizeExactFill([file], 180, 100).subscribe( result =>{
        console.log("Resize exact fill result:", result);
        //all good
        this.zone.run(()=>{
          this.resizedExactFilledImage=window.URL.createObjectURL(result);
          this.resizedExactFilledImageTrusted=this.sanitizer.bypassSecurityTrustUrl(this.resizedExactFilledImage);
        });
       }, error => {
            console.error("Resize exact fill error:", error);
       }
    );
  }

}
