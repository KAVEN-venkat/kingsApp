import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController, ActionSheetController, LoadingController, AlertController, NavParams } from '@ionic/angular';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { AlertService } from 'src/app/services/alert.service';
import { LuckyService } from 'src/app/services/lucky.service';
import { WinnerService } from 'src/app/services/winner.service';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.page.html',
  styleUrls: ['./winner.page.scss'],
})
export class WinnerPage implements OnInit {
	winnerForm:FormGroup;
	items=[];
	digits=[];
	itemId :any;
	currentDate: String = new Date().toISOString();
	submitted:Boolean=false;
	//submittedwinner:Boolean=false;
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private formBuilder: FormBuilder,private itemService: ItemService,private alertService: AlertService,private router: Router, public navParams : NavParams, public luckyService:LuckyService, public winnerService:WinnerService,public loadingController:LoadingController){
		this.menu.enable(true);		
	}

	ngOnInit(){
		this.luckyformFields();
		this.itemsList();
	}

	itemsList(){		
		this.presentLoading();
		this.itemService.items().subscribe(data => {
	    	if(data['status']){
	    		this.presentLoadingDismiss();
				this.items = data['itemsList'];
				this.items = this.items.filter((test, index, array) =>
					index === array.findIndex((findTest) =>
						findTest.result_time === test.result_time
					)
				);
			    console.log(this.items);
			}else{
				this.presentLoadingDismiss();
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}

	getDigits(digit:any){
		this.digits = [];
		if(this.t.length > 0){
		const emptyArray = <FormArray>this.winnerForm.controls.pages;
		emptyArray.controls = [];
		}
		const numberOfProjects = digit || 0;
		for(let i = 1;i <= digit;i++){
			this.digits.push(i);
			if (this.t.length < numberOfProjects) {
				for (let i = this.t.length; i < numberOfProjects; i++) {
					this.t.push(this.formBuilder.group({
						winning_item: ['', [Validators.minLength(numberOfProjects-i),Validators.maxLength(numberOfProjects-i),Validators.required]]
					}));
				}
			}
		}    	
  	}

  	get f() { return this.winnerForm.controls; }
    get t() { return this.f.pages as FormArray; }

	luckyformFields(){
		this.winnerForm = this.formBuilder.group({
			winner_date:[this.currentDate,Validators.required],
			result_time: ['', Validators.required],
			winnerA: [''],
			winnerB: [''],
			winnerC: [''],
			winnerD: [''],
			winnerE: [''],
			/*item_id: ['',Validators.required],
            total_digits: ['', Validators.required],
            pages: new FormArray([])*/
        });
	}
	winnerCreation(){
		this.submitted = true;
		if (this.winnerForm.invalid) {
			return;
        }
		//this.submittedwinner = true;
        console.log(this.winnerForm.value);
        this.winnerService.createWinner(this.winnerForm.value.winner_date,this.winnerForm.value.result_time,this.winnerForm.value.winnerA,this.winnerForm.value.winnerB,this.winnerForm.value.winnerC,this.winnerForm.value.winnerD,this.winnerForm.value.winnerE).subscribe(data=>{
        	console.log(data);
        	if(data['status'] == 1){
	    		this.closeWinnerModal();
		    	this.alertService.presentToast(data['message']);
		    }else{
		    	this.alertService.presentToast(data['message']);
	    	}
        });
    }
	getItemId(event){
		this.itemId = event.detail.value;
		if(this.itemId != ''){	
			this.presentLoading();	
			this.itemService.item(event.detail.value).subscribe(data => {
		    	console.log(data);
		    	this.presentLoadingDismiss();
		    	if(data['status']){
					this.winnerForm.controls['result_time'].setValue(data['itemDetails'].result_time);
					this.winnerForm.controls['total_digits'].setValue(data['itemDetails'].item_digits);
					this.getDigits(data['itemDetails'].item_digits);
				}else{
			    	this.alertService.presentToast(data['message']);
		    	}
		    },error => {
		        console.log(error);
		    });
		}
	}
	onEnterWinner(e){
    	console.log(e.detail.value);
    }
	closeWinnerModal(data:string=''){
		this.modalController.dismiss({
			'dismissed': true,
			'data':data
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
