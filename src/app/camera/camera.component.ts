import { Component, AfterViewInit, ViewChild, ElementRef, input, effect } from '@angular/core';

@Component({
  selector: 'app-camera',
  standalone: true,
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements AfterViewInit {

  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoElement1') videoElement1!: ElementRef<HTMLVideoElement>;

  cameraId = input('')


  constructor() { }

  ngAfterViewInit() {
    this.startCamera();
  }

  eff = effect(() => {
    console.log(this.cameraId())
  })


  startCamera() {
    // Check if mediaDevices API is supported
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          if (this.videoElement.nativeElement) {
            this.videoElement.nativeElement.srcObject = stream;
          }
          if (this.videoElement1.nativeElement) {
            this.videoElement1.nativeElement.srcObject = stream;
          }
          
        })
        .catch(error => {
          console.error('Error accessing the camera:', error.message);
          if (error.name === 'NotFoundError') {
            console.error('No camera devices found.');
          } else if (error.name === 'NotAllowedError') {
            console.error('Permission to access the camera was denied.');
          } else if (error.name === 'NotReadableError') {
            console.error('Camera is being used by another application.');
          } else {
            console.error('An unknown error occurred:', error);
          }
        });
    } else {
      console.error('getUserMedia is not supported by this browser.');
    }
  }
}