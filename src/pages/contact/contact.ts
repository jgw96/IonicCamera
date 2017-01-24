import { Component } from '@angular/core';

import { NavController, ViewController } from 'ionic-angular';

import { Photos } from '../../providers/photos';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  canZoom: boolean;
  zoomMin: number;
  zoomMax: number;

  constructor(
    public navCtrl: NavController,
    public photos: Photos,
    public viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    this.photos.zoomInfo().then((zoomInfo) => {
      this.canZoom = true;
      console.log(zoomInfo);
    }).catch(() => {
      this.canZoom = false;
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
