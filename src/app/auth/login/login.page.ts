import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, NavController, MenuController, ActionSheetController, LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	loginForm: FormGroup;
	submitted = false;
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private formBuilder: FormBuilder,private authService: AuthService,private alertService: AlertService,private router: Router, public loadingController: LoadingController){
		this.menu.enable(false);
		this.loginFormValidation();
	}

	ngOnInit() {
		if(localStorage.getItem('user_id')){
			this.navCtrl.navigateRoot('/home');
		}
		
	}
	loginFormValidation() {
		this.loginForm = this.formBuilder.group({
            mobile:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
	}

	dismissLogin() {
		this.modalController.dismiss();
	}
	forgot(){
		this.navCtrl.navigateRoot('/forgot');
	}
	login(){
		//this.navCtrl.navigateRoot('/home');
		this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
		}
		this.presentLoading();
		this.authService.login(this.loginForm.value.mobile, this.loginForm.value.password).subscribe(data => {
			if(data['status'] == 1){
		    	/*localStorage.setItem('access_token', data['user_detail']['access_token']);
		    	localStorage.setItem('token_type', data['user_detail']['token_type']);
				localStorage.setItem('user_id', data['user_detail']['user']['id']);
				localStorage.setItem('first_name', data['user_detail']['user']['first_name']);
				localStorage.setItem('last_name', data['user_detail']['user']['last_name']);
				localStorage.setItem('email', data['user_detail']['user']['email']);*/
				localStorage.setItem('user_detail', JSON.stringify(data['user_detail']));
				console.log(localStorage.getItem('user_detail'));
				this.presentLoadingDismiss();
		    	//this.navCtrl.navigateRoot('/home');
				this.router.navigate(['home']);
		    	this.alertService.presentToast(data['message']);
		    }else{
		    	this.alertService.presentToast(data['message']);
	    	}
		},error => {
			this.presentLoadingDismiss();
			console.log(error);
		},() => {
			//this.dismissRegister();
			//this.navCtrl.navigateRoot('/otp');
		});
	}
	async presentLoading() {
		const loading = await this.loadingController.create({
			message: 'Please wait...',
			//duration: 2000
		});
		await loading.present();
	}

	async presentLoadingDismiss(){
		await this.loadingController.dismiss();
	}
}
