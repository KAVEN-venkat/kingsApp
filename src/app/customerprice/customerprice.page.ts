import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController, ActionSheetController, LoadingController, AlertController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
import { CustomerPage } from '../modals/customer/customer.page';

@Component({
  selector: 'app-customerprice',
  templateUrl: './customerprice.page.html',
  styleUrls: ['./customerprice.page.scss'],
})
export class CustomerpricePage implements OnInit {
	priceDetails:any;
	user_id:String;
	user_name:String;
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private customerService: CustomerService,private alertService: AlertService,private router: Router, private env:EnvService, public actionSheetController: ActionSheetController, public loadingController: LoadingController, public alertController: AlertController,private activatedRoute: ActivatedRoute){
		this.menu.enable(true);
		this.user_id = this.activatedRoute.snapshot.paramMap.get('id');
		this.user_name = this.activatedRoute.snapshot.paramMap.get('name');
		this.priceLists();
	}

	ngOnInit() {
	}

	priceLists(){
		//this.presentLoading();
		this.customerService.customerPrice(this.user_id).subscribe(data => {
	    	if(data['status']){
	    	this.priceDetails = data['customerPriceDetails'];
		    console.log(this.priceDetails);
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}
}
