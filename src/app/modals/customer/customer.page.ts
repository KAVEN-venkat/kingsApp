import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
	customerForm: FormGroup;
	submitted = false;
	last_name: any;
	userType:any = 'Customer';
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private formBuilder: FormBuilder,private customerService: CustomerService,private alertService: AlertService,private router: Router){
		this.menu.enable(true);
	}

	ngOnInit(){
		if(!localStorage.getItem('user_detail')){
			this.navCtrl.navigateRoot('/');
		}
		this.customerForm = this.formBuilder.group({
            first_name: ['', Validators.required],
            email: ['', [Validators.email]],
            mobile_number:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        });
	}

	dismiss() {
	    this.modalController.dismiss({
	    	'dismissed': true
	    });
  	}
  	customerCreation(){
  		this.submitted = true;
        // stop here if form is invalid
        if (this.customerForm.invalid) {
            return;
        }
        this.last_name = '';
        this.customerService.createCustomer(this.customerForm.value.first_name,this.last_name,this.customerForm.value.mobile_number,this.customerForm.value.email,this.customerForm.value.mobile_number,this.userType).subscribe(data => {
	    	console.log(data['user_detail']['id']);
	    	if(data['status'] == 1){
		    	this.dismiss();
		    	this.alertService.presentToast(data['message']);
		    }else{
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
  	}

}
