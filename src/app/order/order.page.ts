import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController, ActionSheetController, LoadingController, AlertController,ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { AlertService } from 'src/app/services/alert.service';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
	orders=[];
	dataSend: string = "";
	constructor(private activateRoute: ActivatedRoute, private router: Router,private orderService: OrderService,private alertService: AlertService, private navCtrl: NavController, private bluetoothSerial: BluetoothSerial,private toastCtrl: ToastController,private alertCtrl:AlertController){ 
		
	}

	ngOnInit() {
		this.activateRoute.queryParams.subscribe(params => {
			if (params && params.saleItems) {
				this.orders = JSON.parse(params.saleItems);
				console.log(this.orders);
			}
		});
	}

	printOrders(){
		if(this.orders && this.orders.length > 0){
			for(let i=0; i < this.orders.length; i++){
				/*this.orderService.createOrder(this.orders[i].customer_id,this.orders[i].extra_price,this.orders[i].item_digits, this.orders[i].item_from, this.orders[i].item_id, this.orders[i]. item_price, this.orders[i].item_qty, this.orders[i].item_to, this.orders[i].sale_date, this.orders[i].total_items, this.orders[i].total_price).subscribe(data => {
			    	console.log(data);
			    	if(data['status'] == 1){
				    	this.alertService.presentToast(data['message']);
				    	this.navCtrl.navigateRoot('/sales');
				    }else{
				    	this.alertService.presentToast(data['message']);
			    	}
			    },error => {
			        console.log(error);
			    });*/
			    this.createOrder(i);
			}
		}else{
			this.alertService.presentToast("No Orders.");
		}
	}

	createOrder(i){
		/*this.orderService.createOrder(this.orders[i].customer_id,this.orders[i].extra_price,this.orders[i].item_digits, this.orders[i].item_from, this.orders[i].item_id, this.orders[i]. item_price, this.orders[i].item_qty, this.orders[i].item_to, this.orders[i].sale_date, this.orders[i].total_items, this.orders[i].total_price).subscribe(data => {
	    	console.log(data);
	    	if(data['status'] == 1){
		    	this.alertService.presentToast(data['message']);
		    	this.bluetoothSerial.isEnabled().then(success => {
					console.log(success);
				},error => {
					this.navCtrl.navigateRoot('/sales');
					this.showError("Please Enable Bluetooth");
				});
		    	//this.printOrder(i);
		    	//this.navCtrl.navigateRoot('/sales');
		    }else{
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });*/
	}

	printOrder(i){
		//this.dataSend += '\n';

		this.dataSend = this.orders[i].sale_date+' \t\t\t\t\t\n '+this.orders[i].item_from+' - '+this.orders[i].item_to+' - '+this.orders[i].item_digits+' \n '+this.orders[i].total_items+' - '+this.orders[i].total_price+' \n';
		this.showToast(this.dataSend);
		this.bluetoothSerial.write(this.dataSend).then(success => {
			this.showToast(success);
			this.navCtrl.navigateRoot('/sales');
		},error =>{
			this.showError(error);
		});
	}

	remove(k){
		alert(k);
		//let index = this.orders.indexOf(k);
		this.orders.splice(0, 1);
		console.log(this.orders);
		let navigationExtras: NavigationExtras = {
		      queryParams: {
		        saleItems: JSON.stringify(this.orders)
		      }
		    };
	    this.router.navigate(['order'], navigationExtras);
	    /*if(index > -1){
	      this.orders.splice(index, 1);
	    }
	    console.log(this.orders);*/
	}

	async showError(error){
		let alert = await this.alertCtrl.create({
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

}
