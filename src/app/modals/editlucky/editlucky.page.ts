import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController, NavParams } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { LuckyService } from 'src/app/services/lucky.service';

@Component({
  selector: 'app-editlucky',
  templateUrl: './editlucky.page.html',
  styleUrls: ['./editlucky.page.scss'],
})
export class EditluckyPage implements OnInit {
  editluckyForm: FormGroup;
	submitted = false;
	title:String;
  luckyId: Number;
  luckyPrice: any;
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private formBuilder: FormBuilder,private alertService: AlertService,private router: Router, public navParams : NavParams, private luckyService:LuckyService){
		this.menu.enable(true);
		this.title = this.navParams.get('title');
		if(this.navParams.get('luckyId')){
			this.luckyId = this.navParams.get('luckyId');
		}
	}

  ngOnInit() {
    this.editluckyForm = this.formBuilder.group({
      price: ['', Validators.required],
      bonus: ['', Validators.required],
      stbonus: ['', Validators.required]
    });
    this.getLucky();
  }
  getLucky() {
    this.luckyService.luckyById(this.luckyId).subscribe(data=>{
      this.luckyPrice = data['luckPrice'];
      console.log(this.luckyPrice.id);
      this.editluckyForm.controls['price'].setValue(this.luckyPrice.price);
      this.editluckyForm.controls['bonus'].setValue(this.luckyPrice.bonus);
      this.editluckyForm.controls['stbonus'].setValue(this.luckyPrice.stbonus);
		});
  }
  luckyUpdate(){
  		this.submitted = true;
        // stop here if form is invalid
        console.log(this.editluckyForm);
        if (this.editluckyForm.invalid) {
            return;
        }
        this.luckyService.updateLucky(this.luckyId,this.editluckyForm.value.price,this.editluckyForm.value.bonus,this.editluckyForm.value.stbonus).subscribe(data => {
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

    dismiss() {
	    this.modalController.dismiss({
	    	'dismissed': true
	    });
  	}
}
