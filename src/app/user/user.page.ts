import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController, ActionSheetController, LoadingController, AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
import { CustomerPage } from '../modals/customer/customer.page';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
	customers:String;
	img_url:String;
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private customerService: CustomerService,private alertService: AlertService,private router: Router, private env:EnvService, public actionSheetController: ActionSheetController, public loadingController: LoadingController, public alertController: AlertController){
		this.menu.enable(true);
		this.img_url = this.env.IMG_URL;
		this.customersList();
	}

	ngOnInit() {
		if(!localStorage.getItem('user_detail')){
			this.navCtrl.navigateRoot('/');
		}
		this.presentLoading();
	}
	customersList(){		
		this.customerService.customers().subscribe(data => {
	    	//console.log(data);
	    	//let result = JSON.stringify(data);
	    	this.presentLoadingDismiss();
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
	async newCustomerModal() {
		const modal = await this.modalController.create({
			component: CustomerPage,
			cssClass: 'my-custom-modal-css'
		});
		modal.onDidDismiss().then(() => {
			this.customersList();
		});
		return await modal.present();
	}
	deleteCustomer(user_id,user_name){
		this.customerService.deleteCustomer(user_id).subscribe(data => {
	    	if(data['status']){
	    	this.alertService.presentToast(data['message']);
	    	this.customersList();
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}			
	    },error => {
	        console.log(error);
	    });
	}
	async deleteCustomerConfirm(user_id,user_name) {
		const alert = await this.alertController.create({
			cssClass: 'my-custom-class',
			header: 'Confirmation!',
			message: 'Are you sure want to delete <strong>'+user_name+'</strong>?',
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
					this.deleteCustomer(user_id,user_name);
				}
			}
			]
		});

    	await alert.present();
  	}
	async presentActionSheet(user_id,user_name) {		
		const actionSheet = await this.actionSheetController.create({
			header: user_name+' Action',
			buttons: [{
				text: 'Item Price',
				icon: 'cash-outline',
				handler: () => {
					this.navCtrl.navigateRoot('/customerprice/'+user_id+'/'+user_name);
					console.log('Delete clicked');
				}
			},{
				text: 'Edit',
				icon: 'create-outline',
				handler: () => {
					console.log('Edit clicked');
					this.navCtrl.navigateRoot('/profile/'+user_id);
				}
			},{
				text: 'Delete',
				role: 'destructive',
				icon: 'trash',
				handler: () => {
					this.deleteCustomerConfirm(user_id,user_name);
					console.log('Delete clicked');
				}
			},{
				text: 'Cancel',
				icon: 'close',
				role: 'cancel',
				handler: () => {
					console.log('Cancel clicked');
				}
			}]
		});
		await actionSheet.present();
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
