import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { RegisterPage } from '../auth/register/register.page';
import { LoginPage } from '../auth/login/login.page';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
	slideOpts = {
		initialSlide: 0,
		speed: 400
	};
	constructor(private modalController: ModalController,private menu: MenuController,private navCtrl: NavController){
		this.menu.enable(false);
	}

	ngOnInit() {
		if(!localStorage.getItem('user_id')){
			this.navCtrl.navigateRoot('/');
		}else{
			this.navCtrl.navigateRoot('/home');
		}
	}
	async register(){
		this.navCtrl.navigateRoot('/register');
	}
	async login() {
		this.navCtrl.navigateRoot('/login');
	}
}
