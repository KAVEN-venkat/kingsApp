import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, NavController, MenuController, ActionSheetController, LoadingController, AlertController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ResultService } from 'src/app/services/result.service';
import { ItemService } from 'src/app/services/item.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
import { Time } from '@angular/common';
import { decimalDigest } from '@angular/compiler/src/i18n/digest';

@Component({
  selector: 'app-resultlist',
  templateUrl: './resultlist.page.html',
  styleUrls: ['./resultlist.page.scss'],
})
export class ResultlistPage implements OnInit {
	orders = [];
	items = [];
	customer = [];
	itemName:String;
	user_id: number;
	user_type: any;
	result_from:Date;
	result_to:Date;
	item_time:Time;
	compareValue: any = [];
	totalQty:any;
	totalPrice:any=0;
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private resultService: ResultService,private alertService: AlertService,private router: Router, private env:EnvService, public actionSheetController: ActionSheetController, public loadingController: LoadingController, public alertController: AlertController, private itemService: ItemService, private activatedRoute: ActivatedRoute, public navParams : NavParams){
		this.menu.enable(true);
		this.user_type = this.navParams.get('user_type');
		this.result_from = this.navParams.get('result_from');
		this.result_to = this.navParams.get('result_to');
		this.user_id = this.navParams.get('customer_id');
		this.item_time = this.navParams.get('item_time');
		this.viewResults();
	}

	ngOnInit() {
		this.presentLoading();
	}

	dismiss() {
	    this.modalController.dismiss({
	    	'dismissed': true
	    });
	}
	  
	viewResults(){
		this.resultService.results(this.user_type,this.result_from, this.result_to, this.user_id , this.item_time).subscribe(data => {
			//console.log(data);
			if(data['status']){
				this.orders = data['resultsList'];
				this.customer = this.orders['customer'];
				this.items = this.orders['items'];
				this.presentLoadingDismiss();
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}

	itemByColumn(itemId,columnName){
		this.itemService.itemByColumn(itemId,columnName).subscribe(data => {
	    	//console.log(data);
	    	if(data['status']){
	    		this.itemName = data['items'];
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}

	addFloatvalues(price,extraPrice){
		return (parseFloat(price) + parseFloat(extraPrice));
	}

	qtyCalculation(price,extraPrice,qty){
		return (parseFloat(price) + parseFloat(extraPrice)) * qty;
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
