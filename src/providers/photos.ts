import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

/*
  Generated class for the Photos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Photos {

  photos: any[];
  imageCapture: any;
  capabilities: any;
  videoSrc: any;

  constructor(public storage: Storage) {
    console.log('Hello Photos Provider');

    this.photos = [];
  }

  savePhotos(photo) {
    this.photos.push({ photo });
    return this.storage.set('photos', this.photos);
  }

  getPhotos() {
    return this.storage.get('photos');
  }

  drawCanvas(canvas, image) {
    canvas.width = image.width;
    canvas.height = image.height;
    canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height);
  }

  startImage() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((mediaStream) => {
        this.videoSrc = mediaStream;
        const track = mediaStream.getVideoTracks()[0];
        this.imageCapture = new (window as any).ImageCapture(track);
        this.imageCapture.getPhotoCapabilities().then((photoCapabilities) => {
          console.log(photoCapabilities);
          this.capabilities = photoCapabilities;
        });
      })
      .catch(error => console.log(error));
  }

  takeImage(): Promise<any> {
    return this.imageCapture.takePhoto();
  }

  zoomInfo(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.capabilities.zoom.min && !this.capabilities.zoom.max) {
        reject('Zoom is not supported on this device');
      } else {
        resolve(this.capabilities.zoom);
      }
    })
  }



}
