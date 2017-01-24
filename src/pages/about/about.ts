import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Photos } from '../../providers/photos';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  photosArray: any[];

  constructor(public navCtrl: NavController, public photos: Photos) {

  }

  ionViewDidEnter() {
    this.photos.getPhotos().then((photos) => {
      console.log(photos);
      if (photos !== null) {
        this.photosArray = photos;
        console.log(this.photosArray[0].photo.pic);
      } else {
        this.photosArray = [];
      }
    })
  }

}
