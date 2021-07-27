import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController, ActionSheetController, LoadingController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { TypePage } from '../modals/type/type.page';
import { ItemService } from 'src/app/services/item.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
import { OrderService } from 'src/app/services/order.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
	items=[];
	orders=[];
	img_url:string;
	customer: [];
	total: any = 0;
	user: any;
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private itemService: ItemService,private alertService: AlertService, private env:EnvService,private orderService: OrderService, private customerService: CustomerService, public loadingController: LoadingController){
		this.img_url = this.env.IMG_URL;
		this.menu.enable(true);
	}

	ngOnInit() {
		if(!localStorage.getItem('user_detail')){
			this.navCtrl.navigateRoot('/');
		}else{
			this.navCtrl.navigateRoot('/home');
			//this.openModal();
		}
		this.getUser();
		this.itemsList();
		this.ordersList();
		this.ordersTotal();
	}
	itemsList(){		
		this.itemService.items().subscribe(data => {
	    	if(data['status']){
		    	this.items = data['itemsList'];
			    console.log(this.items);
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}
	ordersTotal(){
		//this.presentLoading();
		this.orderService.totalOrder().subscribe(data => {
	    	//this.presentLoadingDismiss();
	    	if(data['status']){
				this.total = data['ordersTotal'].total;
				console.log(this.orders);
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}
	ordersList(){
		//this.presentLoading();
		let limit = 4;
		this.orderService.orderLists(limit).subscribe(data => {
	    	//this.presentLoadingDismiss();
	    	if(data['status']){
	    	this.orders = data['ordersList'];
			} else {
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}
	getUser(){
		this.user = JSON.parse(localStorage.getItem('user_detail')).user;
		this.customerService.customer(this.user.id).subscribe(data => {
	    	if(data['status']){
	    		this.customer = data['customerDetails'];
		    	console.log(this.customer);
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}
	async openModal() {
		const modal = await this.modalController.create({
			component: TypePage,
			cssClass: 'my-custom-modal-css'
		});
		return await modal.present();
	}
	segmentChanged(event){
		console.log(event.target.value);
		this.navCtrl.navigateRoot('/'+event.target.value);
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
