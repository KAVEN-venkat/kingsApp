import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController, LoadingController } from '@ionic/angular';
import { RegisterPage } from '../auth/register/register.page';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

	constructor(private modalController: ModalController,private menu: MenuController,private navCtrl: NavController, public loadingController: LoadingController){
		this.menu.enable(true);
	}
	ngOnInit() {
		//this.presentLoading();
	}

	async presentLoading() {
		const loading = await this.loadingController.create({
			message: 'Please wait...',
			duration: 2000
		});
		await loading.present();
		const { role, data } = await loading.onDidDismiss();
		console.log('Loading dismissed!');
	}

	async devices(){
		this.navCtrl.navigateRoot('/device');
	}
}
