import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController){
		this.menu.enable(false);
	}

	ngOnInit() {
	}

	resetPassword(){
		this.navCtrl.navigateRoot('/reset');
	}
}
