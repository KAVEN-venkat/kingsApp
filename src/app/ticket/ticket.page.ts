import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController, ActionSheetController, LoadingController, AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ItemPage } from '../modals/item/item.page';
import { ItempricePage } from '../modals/itemprice/itemprice.page';
import { ItemService } from 'src/app/services/item.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {
	items=[];
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private itemService: ItemService,private alertService: AlertService,private router: Router, private env:EnvService, public actionSheetController: ActionSheetController, public loadingController: LoadingController, public alertController: AlertController){
		this.menu.enable(true);
		
	}

	ngOnInit() {
		this.itemsList();
	}

	itemsList(){		
		this.presentLoading();
		this.itemService.items().subscribe(data => {
	    	if(data['status']){
	    		this.presentLoadingDismiss();
		    	this.items = data['itemsList'];
			    //console.log(this.items[0].category.category_name);
			}else{
				this.presentLoadingDismiss();
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}
	
	async newItemModal(openPage,css_class,routeAction,item_id=0) {
		let opencomponent, componentData;
		if(openPage == "itemprice" && item_id != 0){
			opencomponent = ItempricePage;
			componentData = {'title':'New Item','itemId':item_id};
		}else{
			opencomponent = ItemPage;
			if(routeAction == 'createItem' && item_id == 0){
				componentData = {'title':'New Item'};
			}else{
				componentData = {'title':'Update Item','itemId':item_id};
			}
		}
		const modal = await this.modalController.create({
			component: opencomponent,
			cssClass: css_class,
			componentProps: componentData
		});
		modal.onDidDismiss().then(() => {
			this.itemsList();
		});
		return await modal.present();
	}

	async setPrice(item_id,item_name){
		this.newItemModal("itemprice","my-itemprice-modal-css","setPrice",item_id);
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

	async presentActionSheet(item_id, item_name) {
		
		const actionSheet = await this.actionSheetController.create({
			header: ' Action',
			buttons: [{
				text: 'Edit',
				icon: 'create-outline',
				handler: () => {
					this.newItemModal('item','my-item-modal-css','updateItem',item_id);
					console.log('Edit clicked');
				}
			},{
				text: 'Set Price',
				icon: 'cash-outline',
				handler: () => {
					console.log('Set Price');
					this.setPrice(item_id,item_name);
				}
			},{
				text: 'Delete',
				icon: 'trash',
				handler: () => {
					console.log('Delete clicked');
					this.deleteItemConfirm(item_id,item_name);
				}
			}, {
				text: 'Cancel',
				icon: 'close',
				handler: () => {
					console.log('Cancel clicked');
				}
			}]
		});
		await actionSheet.present();
  	}

  	deleteItem(item_id,item_name){
		this.itemService.deleteItem(item_id).subscribe(data => {
	    	if(data['status']){
	    	this.alertService.presentToast(data['message']);
	    	this.itemsList();
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}			
	    },error => {
	        console.log(error);
	    });
	}

	async deleteItemConfirm(item_id,item_name) {
		const alert = await this.alertController.create({
			cssClass: 'my-custom-class',
			header: 'Confirmation!',
			message: 'Are you sure want to delete <strong>'+item_name+'</strong>?',
			buttons: [
			{
				text: 'Cancel',
				role: 'cancel',
				cssClass: 'secondary',
				handler: (blah) => {
					console.log('Confirm Cancel: blah');
				}
			}, {
				text: 'Yes',
				handler: () => {
					this.deleteItem(item_id,item_name);
				}
			}
			]
		});

    	await alert.present();
  	}
}
