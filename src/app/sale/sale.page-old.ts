import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController, ActionSheetController, LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { ItemService } from 'src/app/services/item.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
import { CustomerPage } from '../modals/customer/customer.page';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})
export class SalePage implements OnInit {
	saleForm: FormGroup;
	submitted = false;
	customers:String;
	items=[];
	currentDate: String = new Date().toISOString();
	item_qty: any = 1;
	customer_id:any;
	item_id:any;
	itemName:String;
	itemPrice:any;
	extraPrice:any;
	min_length:any;
	max_length:any;
	compareValue: any = [];
	saleItems: any = [];
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private customerService: CustomerService,private alertService: AlertService,private router: Router, private env:EnvService, public actionSheetController: ActionSheetController, public loadingController: LoadingController, public alertController: AlertController,private itemService: ItemService, private formBuilder: FormBuilder){
		this.menu.enable(true);
		
	}

	ngOnInit() {
		if(!localStorage.getItem('user_id')){
			this.navCtrl.navigateRoot('/');
		}
		this.customersList();
		this.itemsList();
		this.saleFormValidation();
		
	}

	saleFormValidation() {
		this.saleForm = this.formBuilder.group({
            sale_date: [this.currentDate, Validators.required],
            customer_id: ['', Validators.required],
            item_id: ['', Validators.required],
            item_from: ['', Validators.required],
            item_to: ['', Validators.required],
            item_digits: ['C', Validators.required],
            item_qty: [this.item_qty, Validators.required],
            total_items: ['', Validators.required],
            total_price: ['', Validators.required],
        });
	}

	customersList(){
		this.customerService.customers().subscribe(data => {
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

	itemsList(){
		//this.presentLoading();
		this.itemService.items().subscribe(data => {
	    	if(data['status']){
	    		//this.presentLoadingDismiss();
		    	this.items = data['itemsList'];
			    console.log(this.items);
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}

	getCustomerId(event){
		this.customer_id = event.detail.value;
		//this.saleForm.controls['item_id'].setValue('');
		this.saleForm.controls['item_from'].setValue('');
		this.saleForm.controls['item_to'].setValue('');
		this.saleForm.controls['item_qty'].setValue('');
	}

	getItemId(event){
		this.item_id = event.detail.value;
		if(this.item_id != ''){	
		//this.presentLoading();	
			this.itemService.item(event.detail.value).subscribe(data => {
		    	console.log(data);
		    	//this.presentLoadingDismiss();
		    	if(data['status']){
		    		this.itemName = data['itemDetails'].item_name;
		    		this.itemPrice = data['itemDetails'].item_price;
		    		this.min_length = data['itemDetails'].item_digits;
		    		this.max_length = data['itemDetails'].item_digits;
		    		console.log(parseFloat(this.itemPrice) + parseFloat(this.extraPrice));
		    		//if((this.saleForm.value.item_from.length != data['itemDetails'].item_digits) || (this.saleForm.value.item_to.length != data['itemDetails'].item_digits)){
		    			this.saleForm.controls['item_from'].setValue('');
		    			this.saleForm.controls['item_to'].setValue('');
		    			this.saleForm.controls['item_qty'].setValue('');
		    		//}
		    		this.qtyCalculation();
		    		//
				}else{
			    	this.alertService.presentToast(data['message']);
		    	}
		    },error => {
		        console.log(error);
		    });
		}
	}

	qtyCalculation(){
		//this.submitted = true;
		if(this.customer_id != "" && this.item_id != ""){
			//this.presentLoading();
			this.customerService.customerPrice(this.customer_id,this.item_id).subscribe(data => {
		    	if(data['status']){
			    	this.extraPrice = data['customerPriceDetails'].extra_price;
			    	console.log(this.extraPrice);				
					this.calculateTotalPrice();
				}else{
			    	this.alertService.presentToast(data['message']);
			    	this.extraPrice = 0;
			    	this.calculateTotalPrice();
		    	}
		    },error => {
		        console.log(error);
		    });
		}
	}

	calculateTotalPrice(){
		this.item_qty = 0;
		if(this.saleForm.value.item_digits == 'C'){
			for(let i=this.saleForm.value.item_from;i<=this.saleForm.value.item_to;i++){
				this.item_qty = this.item_qty + 1;
			}
		}else if(this.saleForm.value.item_digits == 'S'){
			let sDigit = this.saleForm.value.item_from.toString().substr(this.max_length-1);
			for(let i=this.saleForm.value.item_from;i<=this.saleForm.value.item_to;i++){
				console.log(i % 10);
				//if(i.toString().substr(this.max_length-1) == sDigit){
					if(i%10 == sDigit){
					//console.log(i.toString().substr(this.max_length-1));
					this.item_qty = this.item_qty + 1;
				}
			}
		}else if(this.saleForm.value.item_digits == 'D'){
			let sDigit = this.saleForm.value.item_from.toString().substr(this.max_length-2);
			for(let i=this.saleForm.value.item_from;i<=this.saleForm.value.item_to;i++){
				//console.log(i.toString().substr(this.max_length-1)+"==="+sDigit);
				if(i.toString().substr(this.max_length-2) == sDigit){
					//console.log(i.toString().substr(this.max_length-1));
					this.item_qty = this.item_qty + 1;
				}
			}
		}else if(this.saleForm.value.item_digits == 'T'){
			for(let c=0;c<10;c++){
				this.compareValue[c] = c.toString().repeat(3);
			}
			//console.log(this.compareValue);
			for(let i=this.saleForm.value.item_from;i<=this.saleForm.value.item_to;i++){
				let v = '';
				for(let j=0;j<(this.max_length - i.toString().length);j++){
					v = v+"0";
				}
				//console.log(v+""+i.toString());
				if(this.compareValue.includes(v+""+i.toString().substr(this.max_length-3))){
					this.item_qty = this.item_qty + 1;
				}		
			}
		}
		//console.log(this.item_qty);
		this.item_qty = this.item_qty * this.saleForm.value.item_qty;
		this.saleForm.controls['total_items'].setValue(this.item_qty);
		let total_price = (parseFloat(this.itemPrice) + parseFloat(this.extraPrice)) * this.saleForm.value.total_items;
		this.saleForm.controls['total_price'].setValue(total_price);
		//this.presentLoadingDismiss();
	}

	newSale(){
		this.submitted = true;
        // stop here if form is invalid
        console.log(this.saleForm);
        if (this.saleForm.invalid) {
            return;
		}
		if(this.saleForm.value.item_digits == 'T'){
			let v = '';
				for(let j=0;j<(this.max_length - this.saleForm.value.item_from.toString().length);j++){
					v = v+"0";
				}
				this.saleForm.value.item_from = v+""+this.saleForm.value.item_from;
		}
        const data = {sale_date:this.saleForm.value.sale_date,customer_id:this.saleForm.value.customer_id,item_id:this.saleForm.value.item_id,item_name:this.itemName,item_from:this.saleForm.value.item_from,item_to:this.saleForm.value.item_to,item_digits:this.saleForm.value.item_digits,item_qty:this.saleForm.value.item_qty,total_items:this.saleForm.value.total_items,total_price:this.saleForm.value.total_price,item_price:this.itemPrice,extra_price:this.extraPrice};
        this.saleItems.push(data);
        console.log(this.saleItems.length);
        this.submitted = false;
        //this.saleForm.controls['item_id'].setValue('');
        this.saleForm.controls['item_from'].setValue('');
		this.saleForm.controls['item_to'].setValue('');
		this.saleForm.controls['item_qty'].setValue('');
		this.saleForm.controls['total_items'].setValue('');
		this.saleForm.controls['total_price'].setValue('');
		//this.presentLoadingDismiss();
	}

	viewOrders(){
		console.log(this.saleItems.length);
		let navigationExtras: NavigationExtras = {
		      queryParams: {
		        saleItems: JSON.stringify(this.saleItems)
		      }
		    };
	    this.router.navigate(['order'], navigationExtras);
		//this.navCtrl.navigateRoot('/order');
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
