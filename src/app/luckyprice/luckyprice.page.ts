import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController, ActionSheetController, LoadingController, AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
import { LuckyService } from 'src/app/services/lucky.service';
import { LuckyPage } from '../modals/lucky/lucky.page';
import { EditluckyPage } from '../modals/editlucky/editlucky.page';

@Component({
  selector: 'app-luckyprice',
  templateUrl: './luckyprice.page.html',
  styleUrls: ['./luckyprice.page.scss'],
})
export class LuckypricePage implements OnInit {
	luckyPrices:any;
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private itemService: ItemService,private alertService: AlertService,private router: Router, private env:EnvService, public actionSheetController: ActionSheetController, public loadingController: LoadingController, public alertController: AlertController, public luckyService:LuckyService){
		this.menu.enable(true);
	}

	ngOnInit(){
		this.presentLoading();
		this.luckyService.luckpriceLists().subscribe(data=>{
			this.luckyPrices =data['luckyPriceList'];
			this.presentLoadingDismiss();
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

	async presentActionSheet(scheme_id, item_name) {
		
		const actionSheet = await this.actionSheetController.create({
			header: ' Action',
			buttons: [{
				text: 'Edit',
				icon: 'create-outline',
				handler: () => {
					this.newSchemeModal('editlucky','my-lucky-modal-css','updateLucky',scheme_id);
					console.log('Edit clicked');
				}
			},{
				text: 'Delete',
				icon: 'trash',
				handler: () => {
					console.log('Delete clicked');
					this.deleteSchemeConfirm(scheme_id,item_name);
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
	/*async newLuckyModal() {
		const modal = await this.modalController.create({
			component: LuckyPage,
			cssClass: "luck-Modal"
		});
		modal.onDidDismiss().then((response) => {
			if(response.data.data != ''){
				this.alertService.presentToast(response.data.data);
				this.ngOnInit();
			}
			console.log("Modal Closed.");
		});
		return await modal.present();
	}*/
	async newSchemeModal(openPage,css_class,routeAction,scheme_id=0) {
		let opencomponent, componentData;
		opencomponent = (openPage=='scheme') ? LuckyPage: EditluckyPage;
			if(routeAction == 'createScheme' && scheme_id == 0){
				componentData = {'title':'New Scheme'};
			}else{
				componentData = {'title':'Update Scheme','luckyId':scheme_id};
			}
		console.log(componentData);
		const modal = await this.modalController.create({
			component: opencomponent,
			cssClass: css_class,
			componentProps: componentData
		});
		modal.onDidDismiss().then(() => {
			this.ngOnInit();
		});
		return await modal.present();
	}
	deleteScheme(scheme_id,item_name){
		this.luckyService.deleteLucky(scheme_id).subscribe(data => {
	    	if(data['status']){
	    	this.alertService.presentToast(data['message']);
	    	this.ngOnInit();
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}			
	    },error => {
	        console.log(error);
	    });
	}

	async deleteSchemeConfirm(scheme_id,item_name) {
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
					this.deleteScheme(scheme_id,item_name);
				}
			}
			]
		});
    	await alert.present();
  	}
}
