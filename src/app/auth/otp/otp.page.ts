import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
	otpForm: FormGroup;
	submitted = false;
	user_id :String;
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private formBuilder: FormBuilder,private authService: AuthService,private alertService: AlertService, private route: ActivatedRoute, private router: Router){
		this.menu.enable(false);
		/*this.route.queryParams.subscribe(params => {
	      if (params && params.special) {
	        localStorage.setItem('user_id', JSON.parse(params.special));
	      }
	    });*/
	    this.user_id = localStorage.getItem('user_id');
		this.verifiedOtpForm();
	}

	ngOnInit() {
		
	}

	verifiedOtpForm() {
		this.otpForm = this.formBuilder.group({
            otp:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{6}$")]]
        });
	}

	verified(){
		console.log(this.user_id);
		this.submitted = true;
        // stop here if form is invalid
        if (this.otpForm.invalid) {
            return;
        }
        this.authService.verifyOtp(this.user_id,this.otpForm.value.otp).subscribe(data => {
			if(data['status'] == 1){
				localStorage.removeItem('user_id');
		    	this.navCtrl.navigateRoot('/login');
		    	this.alertService.presentToast(data['message']);
		    }else{
		    	this.alertService.presentToast(data['message']);
	    	}
		},error => {
			console.log(error);
		},() => {
			//this.navCtrl.navigateRoot('/home');
		});
	}
}
