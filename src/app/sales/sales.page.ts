import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, MenuController, ActionSheetController, LoadingController, AlertController,IonInfiniteScroll } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { ItemService } from 'src/app/services/item.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {
	orders=[];
	itemName: String;
	offset: any = 0;
	count: any;
	@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private orderService: OrderService,private alertService: AlertService,private router: Router, private env:EnvService, public actionSheetController: ActionSheetController, public loadingController: LoadingController, public alertController: AlertController, private itemService: ItemService){
		this.menu.enable(true);
	}

	ngOnInit() {
		this.ordersCount();
		this.ordersList();
	}

	loadData(event) {
		this.offset = this.offset + 1;
		console.log(this.offset);
		this.ordersList();
		setTimeout(() => {
			console.log('Done');
			event.target.complete();
			if (this.orders.length == this.count) {
				event.target.disabled = true;
			}
		}, 500);
	}
	ordersCount(){
		
		this.orderService.orderCount().subscribe(data => {
	    	this.presentLoadingDismiss();
	    	if(data['status']){
				this.count=data['ordersCount']
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}
	ordersList(){
		this.presentLoading();
		this.orderService.orderLists(this.offset).subscribe(data => {
	    	//console.log(data);
	    	//let result = JSON.stringify(data);
	    	this.presentLoadingDismiss();
	    	if(data['status']){
				if (this.orders.length == 0) {
					this.orders = data['ordersList'];
				} else {
					this.orders = this.orders.concat(data['ordersList']);
				}
				
		    	console.log(this.orders);
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}
	itemByColumn(itemId,columnName){
		this.itemService.itemByColumn(itemId,columnName).subscribe(data => {
	    	console.log(data);
	    	if(data['status']){
	    		this.itemName = data['items'];
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}
	
	async newSaleModal() {
		this.navCtrl.navigateRoot('/sale');
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
