import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController, NavParams } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { AlertService } from 'src/app/services/alert.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
	itemForm: FormGroup;
	submitted = false;
	title:String;
	itemId: Number;
	categories: any;
	categoryId: any;
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private formBuilder: FormBuilder,private itemService: ItemService,private alertService: AlertService,private router: Router, public navParams : NavParams, private categoryService:CategoryService){
		this.menu.enable(true);
		this.title = this.navParams.get('title');
		if(this.navParams.get('itemId')){
			this.itemId = this.navParams.get('itemId');
		}
	}

	ngOnInit() {
		if(!localStorage.getItem('user_detail')){
			this.navCtrl.navigateRoot('/');
		}
		this.categoriesList();
		this.getItem();
		this.itemForm = this.formBuilder.group({
			category_id: ['', Validators.required],
            item_name: ['', Validators.required],
            item_digits: ['', Validators.required],
            result_time:['', Validators.required],
            result_code:['', Validators.required],
            item_price:['', Validators.required]
        });
	}

	categoriesList() {
		this.categoryService.categories().subscribe(data => {
	    	if(data['status']){
	    		this.categories = data['categoriesList'];
				console.log(this.categories);
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}

	itemCreation(){
  		this.submitted = true;
        // stop here if form is invalid
        if (this.itemForm.invalid) {
            return;
        }
        if(this.itemId != undefined){
        	this.itemUpdation();
        }else{
	        this.itemService.createItem(this.itemForm.value.category_id,this.itemForm.value.item_name,this.itemForm.value.item_digits,this.itemForm.value.result_time,this.itemForm.value.result_code,this.itemForm.value.item_price).subscribe(data => {
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
  	}

  	itemUpdation(){
  		this.submitted = true;
        // stop here if form is invalid
        console.log(this.itemForm);
        if (this.itemForm.invalid) {
            return;
        }
        this.itemService.updateItem(this.itemForm.value.category_id,this.itemForm.value.item_name,this.itemForm.value.item_digits,this.itemForm.value.result_time,this.itemForm.value.result_code,this.itemForm.value.item_price,this.itemId).subscribe(data => {
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

  	getItem(){
  		this.itemService.item(this.itemId).subscribe(data => {
	    	console.log(data);
	    	//this.presentLoadingDismiss();
	    	//let result = JSON.stringify(data);
			
				if (data['status']) {
					this.categoriesList();
					console.log(data['itemDetails']);
					this.categoryId = data['itemDetails'].category_id + "";
					console.log(this.categoryId);
					this.itemForm = this.formBuilder.group({
					category_id: [this.categoryId, Validators.required],
					item_name: [data['itemDetails'].item_name, Validators.required],
		            item_digits: [data['itemDetails'].item_digits, Validators.required],
		            result_time:[data['itemDetails'].result_time, Validators.required],
		            result_code:[data['itemDetails'].result_code, Validators.required],
		            item_price:[data['itemDetails'].item_price, Validators.required]
					});
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
