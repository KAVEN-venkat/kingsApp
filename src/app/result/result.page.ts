import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController, ActionSheetController, LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { ItemService } from 'src/app/services/item.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
import { ResultService } from 'src/app/services/result.service';
import { ResultlistPage } from '../resultlist/resultlist.page';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
	resultForm: FormGroup;
	submitted = false;
	customers:String;
	items=[];
	currentDate: String = new Date().toISOString();
	img_url:String;
	image: any;
	type: any;
	userTypes: any = [{name:'Sub-Dealer',value:'Dealer'},{name:'Customer',value:'Retailer'}];
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private customerService: CustomerService,private alertService: AlertService,private router: Router, private env:EnvService, public actionSheetController: ActionSheetController, public loadingController: LoadingController, public alertController: AlertController,private itemService: ItemService, private formBuilder: FormBuilder,public resultService:ResultService) { 
		this.img_url = this.env.IMG_URL;
		this.image=this.img_url+'images/no_img.png';
	}

	ngOnInit() {
		this.resultForm = this.formBuilder.group({
            result_from: [this.currentDate, Validators.required],
            result_to: [this.currentDate, Validators.required],
            customer_id: ['', Validators.required],
			item_time: ['All', Validators.required],
			user_type:['', Validators.required]
        });
        //this.customersList();
        this.itemsTiming();
	}
	getUserByType(event) {
		if(event.detail.value != ''){		
			this.type = event.detail.value;
			this.customersList();
		}
	}
	customersList(){
		this.presentLoading();
		this.customerService.customersByType(this.type).subscribe(data => {
	    	if(data['status']){
	    	this.presentLoadingDismiss();
	    	this.customers = data['customersList'];
		    console.log(this.customers);
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}
	itemsTiming(){
		//this.presentLoading();
		this.itemService.itemsTime().subscribe(data => {
	    	if(data['status']){
	    		this.presentLoadingDismiss();
		    	this.items = data['itemsList'];
			    console.log(this.items);
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}
	async viewResult(){
		this.submitted = true;
		console.log(this.resultForm);
        if (this.resultForm.invalid) {
            return;
		}
		const modal = await this.modalController.create({
			component: ResultlistPage,
			cssClass: 'result_list',
			componentProps: {'result_from':this.resultForm.value.result_from,'result_to':this.resultForm.value.result_to,'customer_id':this.resultForm.value.customer_id,'item_time':this.resultForm.value.item_time,'user_type':this.resultForm.value.user_type}
		});
		
		return await modal.present();
		this.resultService.results(this.resultForm.value.result_from, this.resultForm.value.result_to, this.resultForm.value.customer_id, this.resultForm.value.item_time,this.resultForm.value.user_type).subscribe(data => {
	    	console.log(data);
	    },error => {
	        console.log(error);
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
}
