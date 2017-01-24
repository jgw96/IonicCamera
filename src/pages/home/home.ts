import { Component } from '@angular/core';

import { NavController, ModalController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Photos } from '../../providers/photos';

import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imageCapture: any;
  videoSrc: any;

  constructor(
    public navCtrl: NavController,
    public photos: Photos,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public storage: Storage) {

  }

  ionViewDidLoad() {
    this.photos.startImage();
    setTimeout(() => {
      this.videoSrc = this.photos.videoSrc;
    }, 500);
  }

  takePhoto() {
    this.photos.takeImage().then((blob) => {
      this.photos.savePhotos({ pic: blob }).then(() => {
        let toast = this.toastCtrl.create({
          message: 'Picture taken',
          duration: 3000
        });
        toast.present();
      })
    })
  }

  settings() {
    const modal = this.modalCtrl.create(ContactPage);
    modal.present();
  }

}
