import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, NavController, MenuController, ActionSheetController, LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { ItemService } from 'src/app/services/item.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';

@Component({
  selector: 'app-itemprice',
  templateUrl: './itemprice.page.html',
  styleUrls: ['./itemprice.page.scss'],
})
export class ItempricePage implements OnInit {
	customers: any;
	customerpriceForm: FormGroup;
	submitted = false;
	itemId:Number;
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private customerService: CustomerService,private itemService: ItemService,private alertService: AlertService,private router: Router, private env:EnvService, public actionSheetController: ActionSheetController, public loadingController: LoadingController, public alertController: AlertController,private formBuilder: FormBuilder, public navParams : NavParams) {
		this.customersList();
		this.itemId = this.navParams.get('itemId');
	}

	ngOnInit() {
		this.customerpriceForm = this.formBuilder.group({
            user_id: ['', Validators.required],
            extra_price: ['', Validators.required]
        });
	}

	customersList(){
		//this.presentLoading();
		this.customerService.customers().subscribe(data => {
	    	//this.presentLoadingDismiss();
	    	if(data['status']){
	    	this.customers = data['customersList'];
		    console.log(this.customers);
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}			
	    },error => {
	        console.log(error);
	    });
	}

	customerPrice(){
		this.submitted = true;
        if (this.customerpriceForm.invalid) {
            return;
        }
        this.customerService.createCustomerPrice(this.customerpriceForm.value.user_id,this.customerpriceForm.value.extra_price, this.itemId).subscribe(data => {
	    	console.log(data);
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

	dismiss() {
	    this.modalController.dismiss({
	    	'dismissed': true
	    });
  	}

}
