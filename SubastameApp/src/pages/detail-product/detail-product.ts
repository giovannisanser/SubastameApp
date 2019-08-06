import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detail-product',
  templateUrl: 'detail-product.html',
})
export class DetailProductPage {

  public productDescription= [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productDescription.push(this.navParams.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailProductPage');
  }



}
