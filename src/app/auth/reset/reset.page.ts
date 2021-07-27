import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController){
		this.menu.enable(false);
	}

	ngOnInit() {
		
	}
	dismissLogin() {
		this.modalController.dismiss();
	}
	login(){
		this.navCtrl.navigateRoot('/login');
	}

}
