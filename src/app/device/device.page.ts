import { Component, OnInit } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { NavController, AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {
	pairedList:pairedlist;
	listToggle: boolean = false;
	pairedDeviceID: number = 0;
	dataSend: string = "";
	constructor(private bluetoothSerial: BluetoothSerial, public navCtrl:NavController, private alertCtrl:AlertController, private toastCtrl: ToastController) {
		this.checkBluetoothEnabled();
	}

	ngOnInit() {
		
	}
	onChangeHandler($event) {
		this.pairedDeviceID = $event.target.value;
	}
	checkBluetoothEnabled(){
		this.bluetoothSerial.isEnabled().then(success => {
			this.listPairedDevices();
		},error => {
			this.showError("Please Enable Bluetooth");
		});
	}
	listPairedDevices(){
		this.bluetoothSerial.list().then(success =>{
			this.pairedList = success;
      		this.listToggle = true;
		},error => {
			this.showError("Please Enable Bluetooth");
			this.listToggle = false;
		});
	}
	selectDevice(){
		alert(this.pairedDeviceID);
		let connectedDevice = this.pairedList[this.pairedDeviceID];
		if(!connectedDevice.address){
			this.showError('Select Paired Device to connect');
			return;
		}
		let address = connectedDevice.address;
		let name = connectedDevice.name;
		this.connect(address);
	}
	connect(address){
		this.bluetoothSerial.connect(address).subscribe(success =>{
			this.deviceConnected();
			this.showToast("Successfully Connected");
		}, error => {
			this.showError("Error:Connecting to Device");
		});
	}

	deviceConnected(){
		this.bluetoothSerial.subscribe('\n').subscribe(success => {
			this.handleData(success);
			this.showToast("Connected Successfully");
		},error =>{
			this.showError(error);
		});
	}
	deviceDisconnected(){
		this.bluetoothSerial.disconnect();
		this.showToast('Device Disconnected');
	}
	handleData(data){
		this.showToast(data);
	}
	sendData(){
		//this.dataSend += '\n';
		this.dataSend = '08-06-2020 \t\t\t\t\t 12345 \n 11111 - 22222 - C \n 12 - 100000 \n';
		this.showToast(this.dataSend);
		this.bluetoothSerial.write(this.dataSend).then(success => {
			this.showToast(success);
		},error =>{
			this.showError(error);
		});
	}

	readData(){
		this.bluetoothSerial.subscribe('\n').subscribe(success => {
			console.log(success);
			this.showToast(success);
		},error =>{
			this.showError(error);
		});
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
interface pairedlist{
	"class": number,
	"id": string,
	"address": string,
	"name": string
}