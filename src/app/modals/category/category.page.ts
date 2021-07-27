import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController, NavParams } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  	categoryForm: FormGroup;
	submitted = false;
	title:String;
	categoryId: Number;
	categories: any;
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private formBuilder: FormBuilder,private alertService: AlertService,private router: Router, public navParams : NavParams, private categoryService:CategoryService){
		this.menu.enable(true);
		this.title = this.navParams.get('title');
		if(this.navParams.get('categoryId')){
			this.categoryId = this.navParams.get('categoryId');
		}
	}

	ngOnInit() {
		if(!localStorage.getItem('user_detail')){
			this.navCtrl.navigateRoot('/');
		}
    if (this.categoryId > 0 && this.categoryId != undefined) {
      this.getCategory();
    }
		this.categoryForm = this.formBuilder.group({
			category_name: ['', Validators.required]
    });
  }
  
	categoryCreation(){
  		this.submitted = true;
        // stop here if form is invalid
        if (this.categoryForm.invalid) {
            return;
        }
        if(this.categoryId != undefined){
        	this.categoryUpdation();
        }else{
	        this.categoryService.createCategory(this.categoryForm.value.category_name).subscribe(data => {
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

  	categoryUpdation(){
  		this.submitted = true;
        // stop here if form is invalid
        console.log(this.categoryForm);
        if (this.categoryForm.invalid) {
            return;
        }
        this.categoryService.updateCategory(this.categoryId,this.categoryForm.value.category_name).subscribe(data => {
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

  	getCategory(){
  		this.categoryService.category(this.categoryId).subscribe(data => {
	    	console.log(data);
	    	//this.presentLoadingDismiss();
	    	//let result = JSON.stringify(data);
			
				if (data['status']) {
					
          this.categoryForm = this.formBuilder.group({
            category_name: [data['categoryDetails'].category_name, Validators.required]
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
