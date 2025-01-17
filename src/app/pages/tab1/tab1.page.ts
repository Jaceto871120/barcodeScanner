import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  slideOptions = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor(private barcodeScanner: BarcodeScanner,
              private dataLocal: DataLocalService) {}

  ionViewDidEnter() {
    // console.log('viewDidEnter');
  }
  ionViewDidLeave() {
    // console.log('viewDidLeave');
  }
  ionViewWillEnter() {
    // console.log('viewWillEnter');
    this.onClick();
  }
  ionViewWillLeave() {
    // console.log('viewWillLeave');
  }

  onClick() {
    // console.log('Presiono leer');
    this.barcodeScanner.scan().then(barcodeData => {
      // console.log('Barcode data', barcodeData);
      if (!barcodeData.cancelled) {
        this.dataLocal.guardarRegistro(barcodeData.format, barcodeData.text);
      }
    }).catch(err => {
        console.log('Error', err);
        //this.dataLocal.guardarRegistro('https', 'https://ticketshop.com.co');
        this.dataLocal.guardarRegistro('QRCode', 'geo:4.620079,-74.124142');
    });
  }
}
