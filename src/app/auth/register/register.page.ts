import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { OtpPage } from '../otp/otp.page';
import { LoginPage } from '../login/login.page';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
	registerForm: FormGroup;
	submitted = false;
    userType:any = 'Dealer';
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private formBuilder: FormBuilder,private authService: AuthService,private alertService: AlertService,private router: Router){
		this.menu.enable(false);
		this.createRegisterForm();
	}

	ngOnInit() {
		if(localStorage.getItem('user_id')){
			this.navCtrl.navigateRoot('/home');
		}
	}

	createRegisterForm() {
		this.registerForm = this.formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            email: ['', [Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirm_password: ['', [Validators.required, Validators.minLength(6)]],
            mobile_number:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        });
	}
	register(){		
		this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
		//this.navCtrl.navigateRoot('/otp');
	    this.authService.register(this.registerForm.value.first_name,this.registerForm.value.last_name,this.registerForm.value.mobile_number,this.registerForm.value.email,this.registerForm.value.password,this.userType).subscribe(data => {
	    	console.log(data);
	    	/*let navigationExtras: NavigationExtras = {
		      queryParams: {
		        special: data['user_detail']['id']
		      }
		    };
	    	this.router.navigate(['/otp', navigationExtras]);*/
	    	if(data['status'] == 1){
		    	localStorage.setItem('user_id', data['user_detail']['id']);
		    	this.navCtrl.navigateRoot('/otp');
		    	this.alertService.presentToast(data['message']);
		    }else{
		    	this.alertService.presentToast(data['message']);
	    	}
			/**/
			
	    },error => {
	        console.log(error);
	    });
	}
}
