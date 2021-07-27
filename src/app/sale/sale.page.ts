import { Component, OnInit, Input, ViewChild,ElementRef } from '@angular/core';
import { ModalController, NavController, MenuController, ActionSheetController, LoadingController, AlertController,ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { CategoryService } from 'src/app/services/category.service';
import { ItemService } from 'src/app/services/item.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
import { OrderService } from 'src/app/services/order.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})
export class SalePage implements OnInit {
	@ViewChild('qtyFocus') inputElementQty;
	@ViewChild('fromFocus') inputElementFrom;
	@ViewChild('toFocus')  inputElementTo;
	saleForm: FormGroup;
	submitted = false;
	categories:String;
	items=[];
	currentDate: String = new Date().toISOString();
	item_qty: any;
	customer_id:any;
	item_id:any;
	itemName: any;
	itemPrice: any;
	extraPrice:any;
	min_length: any;
	max_length: any;
	orders: Array<{ id:Number,sale_date:Date,category_id:Number,item_id:Number,item_price:any,extra_price:any,item_digits:String,item_number:any,item_qty:any,total_items:Number,total_price:any,created_by:Number,created_at:Date,updated_at:Date,delete_at:Date,item:any,billNo:any }> = [];
	billNo: any;
	count: any;
	billdigits: any;
	customers: any;
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private categoryService: CategoryService, private orderService: OrderService,private alertService: AlertService,private router: Router, private env:EnvService, public actionSheetController: ActionSheetController, public loadingController: LoadingController, public alertController: AlertController,private itemService: ItemService, private formBuilder: FormBuilder,private bluetoothSerial: BluetoothSerial,private toastCtrl: ToastController,private customerService: CustomerService){
		this.menu.enable(true);
	}

	ngOnInit() {
		if(!localStorage.getItem('user_detail')){
			this.navCtrl.navigateRoot('/');
		}
		this.createBillNo();
		this.categoriesList();
		//this.itemsList();
		this.saleFormValidation();
		this.customersList();
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
	createBillNo() {
		let limit = 'all';
		this.orderService.orderLists(limit).subscribe(data => {
	    	console.log(data);
	    	//let result = JSON.stringify(data);
	    	this.presentLoadingDismiss();
			if (data['status']) {
				if (data['ordersList'].length > 0 && data['ordersList'][data['ordersList'].length-1]['bill_no'] != null) {
					//alert(parseInt(data['ordersList'][data['ordersList'].length-1]['bill_no']));
					this.billNo = parseInt(data['ordersList'][data['ordersList'].length-1]['bill_no']) + 1;
					this.count = String(this.billNo).length;
					this.billdigits = "";
					for (this.count; this.count < 6; this.count++)
						this.billdigits = this.billdigits + "0";
					this.billNo = this.billdigits + String(this.billNo);
					//alert(this.billNo);
				} else {
					this.billNo = "000001";
					//alert(this.billNo);
				}
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
		
	}
	focusOnQty() {
    	setTimeout(() => {
        	this.inputElementQty.setFocus();
    	}, 200);
	}
	focusOnFrom() {
    	setTimeout(() => {
        	this.inputElementFrom.setFocus();
    	}, 200);
  	}
	removeText() {
		this.saleForm.controls['item_to'].setValue('');
	}
	saleFormValidation() {
		this.saleForm = this.formBuilder.group({
            sale_date: [this.currentDate, Validators.required],
            customer_id: ['', Validators.required],
			category_id: ['', Validators.required],
            item_id: ['', Validators.required],
            item_from: ['', Validators.required],
            item_to: ['', Validators.required],
			item_digits: ['C', Validators.required],
			item_boards: [''],
            item_qty: [this.item_qty, Validators.required],
        });
	}

	categoriesList(){
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

	/*itemsList(){
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
	}*/
	getItemByCategory(event) {
		//;
		if(event.detail.value != ''){		
			this.itemService.itemByCategory(event.detail.value).subscribe(data => {
		    	console.log(data);
		    	//this.presentLoadingDismiss();
		    	if(data['status']){
		    		this.items = data['itemDetails'];
				}else{
			    	this.alertService.presentToast(data['message']);
		    	}
		    },error => {
		        console.log(error);
		    });
		}
	}
	getItemId(event) {
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
					this.saleForm.controls['item_from'].setValue('');
					this.saleForm.controls['item_to'].setValue('');
					// if (this.max_length < 3) {
					// 	this.saleForm.controls['item_boards'].setValue('single');
					// }
					//this.saleForm.controls['item_qty'].setValue('');
				}else{
			    	this.alertService.presentToast(data['message']);
		    	}
		    },error => {
		        console.log(error);
		    });
		}
	}

	getItemFrom(event) {
		if (event.detail.value != '') {
			this.saleForm.controls['item_to'].setValue(event.detail.value);
		}
		if (this.max_length == event.detail.value.length) {
			//alert(event.detail.value.length);
			this.focusOnQty();
		}
	}
	getItemTo(event) {
		if (this.max_length == event.detail.value.length) {
			this.saleForm.controls['item_qty'].setValue('');
			this.focusOnQty();
		}
	}
	newSale() {
		this.submitted = true;
		if (this.saleForm.invalid) {
			return;
		}
		console.log(this.saleForm.value.item_boards);
		
		this.orderService.createOrder(this.saleForm.value.customer_id,this.saleForm.value.category_id, this.extraPrice, this.saleForm.value.item_digits, this.saleForm.value.item_from, this.saleForm.value.item_id, this.itemPrice, this.saleForm.value.item_qty, this.saleForm.value.item_to, this.saleForm.value.sale_date, this.max_length,this.saleForm.value.item_boards,this.billNo).subscribe(data => {
			if (data['status'] == 1) {
				data['orderDetails'].forEach(order => {
					this.orders.push({ id:order.id,sale_date:order.sale_date,category_id:order.category_id,item_id:order.item_id,item_price:order.item_price,extra_price:order.extra_price,item_digits:order.item.item_digits,item_number:order.item_number,item_qty:order.item_qty,total_items:order.total_items,total_price:order.total_price,created_by:order.created_by,created_at:order.created_at,updated_at:order.updated_at,delete_at:order.delete_at,item:order.item,billNo:order.bill_no });
				});
			}
			console.log("Order List");
			console.log(this.orders);
			this.saleForm.controls['item_from'].setValue('');
			this.saleForm.controls['item_to'].setValue('');
			this.saleForm.controls['item_qty'].setValue('');
			if (this.max_length < 3) {
				this.saleForm.controls['item_boards'].setValue('');
			}
			this.focusOnFrom();
	    },error => {
	        console.log(error);
	    });
	}

	async viewSale() {
		this.navCtrl.navigateRoot('/sales');
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

	async removeOrder(index,orderId,itemNumber) {
		const alert = await this.alertController.create({
			cssClass: 'my-custom-class',
			header: 'Confirmation!',
			message: 'Are you sure want to delete <strong>'+itemNumber+'</strong>?',
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
					this.deleteOrder(index,orderId,itemNumber);
				}
			}
			]
		});
    	await alert.present();
	}
	deleteOrder(index,orderId,itemNumber){
		// var isPresent = this.orders.some(function (order, i) {
		// 	return order.id === orderId;
		// });
		// console.log(isPresent);
		let i = this.orders.indexOf(index);
		if(i > -1){
			this.orders.splice(i, 1);
			this.orderService.deleteOrder(orderId).subscribe(data => {
				if(data['status']){
				this.alertService.presentToast(data['message']);
				//this.categoriesList();
				}else{
					this.alertService.presentToast(data['message']);
				}			
			},error => {
				console.log(error);
			});
		}
	}
	async showError(error){
		let alert = await this.alertController.create({
			header: 'Error',
	      	subHeader: error,
	      	buttons: ['Dismiss']
		});
		await alert.present();
	}
	async showToast(msg){
		const toast = await this.toastCtrl.create({
			message:msg,
			duration: 1000
		});
		toast.present();
	}
	checkBluetooth() {
		this.bluetoothSerial.isEnabled().then(success => {
			console.log(success);
			if (success == 'OK') {
				this.printOrder();
			}
		},error => {
			this.showError("Please Enable Bluetooth");
		});
	}
	printOrder() {
		if (this.orders && this.orders.length > 0) {
			var d = new Date();
            var orderDate = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
			let dataSend = '\t\t\t\t\t\t             Bill No:- ' + this.orders[0].billNo + '\n ';
			dataSend += '\t\t\t\t\t               Date:- ' + orderDate + '\n';
			dataSend += '------------------------------------------\n';
			let total = 0;
			for (let i = 0; i < this.orders.length; i++) {
				total = total + (this.orders[i].item_qty * this.orders[i].total_price);
				dataSend += '\t\t('+this.orders[i].item.category.category_name+' - '+this.orders[i].item.item_name+')' + this.orders[i].item_number + " - " + this.orders[i].item_qty + '\n';
			}
			dataSend += '------------------------------------------\n';
			dataSend += '\t\t Total:- ' + total +'\n\n\n\n';
			this.showToast(dataSend);
			this.bluetoothSerial.write(dataSend).then(success => {
				this.showToast(success);
				//this.navCtrl.navigateRoot('/sales');
			}, error => {
				this.showError(error);
			});
		}
	}
}
