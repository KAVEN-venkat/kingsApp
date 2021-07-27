import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController, ActionSheetController, LoadingController, AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoryPage } from '../modals/category/category.page';
import { CategoryService } from 'src/app/services/category.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories = [];
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private categoryService: CategoryService,private alertService: AlertService,private router: Router, private env:EnvService, public actionSheetController: ActionSheetController, public loadingController: LoadingController, public alertController: AlertController){
		this.menu.enable(true);
	}

	ngOnInit() {
		this.categoriesList();
	}

	categoriesList(){		
		this.presentLoading();
		this.categoryService.categories().subscribe(data => {
	    	if(data['status']){
	    		this.presentLoadingDismiss();
		    	this.categories = data['categoriesList'];
			}else{
				this.presentLoadingDismiss();
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}
	
	async newCategoryModal(openPage,css_class,routeAction,category_id=0) {
		let opencomponent, componentData;
		opencomponent = CategoryPage;
			if(routeAction == 'createCategory' && category_id == 0){
				componentData = {'title':'New Category'};
			}else{
				componentData = {'title':'Update Category','categoryId':category_id};
			}
		
		const modal = await this.modalController.create({
			component: opencomponent,
			cssClass: css_class,
			componentProps: componentData
		});
		modal.onDidDismiss().then(() => {
			this.categoriesList();
		});
		return await modal.present();
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

	async presentActionSheet(category_id, category_name) {
		
		const actionSheet = await this.actionSheetController.create({
			header: ' Action',
			buttons: [{
				text: 'Edit',
				icon: 'create-outline',
				handler: () => {
					this.newCategoryModal('category','my-category-modal-css','updateCategory',category_id);
					console.log('Edit clicked');
				}
			},{
				text: 'Delete',
				icon: 'trash',
				handler: () => {
					console.log('Delete clicked');
					this.deleteCategoryConfirm(category_id,category_name);
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

  	deleteCategory(category_id,category_name){
		this.categoryService.deleteCategory(category_id).subscribe(data => {
	    	if(data['status']){
	    	this.alertService.presentToast(data['message']);
	    	this.categoriesList();
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}			
	    },error => {
	        console.log(error);
	    });
	}

	async deleteCategoryConfirm(category_id,category_name) {
		const alert = await this.alertController.create({
			cssClass: 'my-custom-class',
			header: 'Confirmation!',
			message: 'Are you sure want to delete <strong>'+category_name+'</strong>?',
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
					this.deleteCategory(category_id,category_name);
				}
			}
			]
		});
    	await alert.present();
  	}

}