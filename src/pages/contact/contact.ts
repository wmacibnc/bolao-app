import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	contrast : number = 14;
  constructor(public navCtrl: NavController) {

  }

}
