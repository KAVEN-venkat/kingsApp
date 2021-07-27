import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController, ActionSheetController, LoadingController, AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
import { WinnerService } from 'src/app/services/winner.service';
import { WinnerPage } from '../modals/winner/winner.page';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.page.html',
  styleUrls: ['./winners.page.scss'],
})
export class WinnersPage implements OnInit {
	winners:any=[];
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private itemService: ItemService,private alertService: AlertService,private router: Router, private env:EnvService, public actionSheetController: ActionSheetController, public loadingController: LoadingController, public alertController: AlertController, public winnerService:WinnerService){
		this.menu.enable(true);
	}

	ngOnInit(){
		this.winnerList();
	}
	winnerList(){
		this.presentLoading();
		this.winnerService.winnerLists().subscribe(data=>{
			this.winners = data['winner'];
			this.presentLoadingDismiss();
		});
	}
	async newwinnerModal() {
		const modal = await this.modalController.create({
			component: WinnerPage,
			cssClass: "winner-Modal"
		});
		modal.onDidDismiss().then((response) => {
			if(response.data.dismissed){
				this.winnerList();
				this.alertService.presentToast(response.data.data);
			}
			console.log("Modal Closed.");
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
}
