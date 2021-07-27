import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController, NavParams } from '@ionic/angular';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { AlertService } from 'src/app/services/alert.service';
import { LuckyService } from 'src/app/services/lucky.service';

@Component({
  selector: 'app-lucky',
  templateUrl: './lucky.page.html',
  styleUrls: ['./lucky.page.scss'],
})
export class LuckyPage implements OnInit {
	luckyForm:FormGroup;
	items=[];
	digits=[];
	submitted:Boolean=false;
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private formBuilder: FormBuilder,private itemService: ItemService,private alertService: AlertService,private router: Router, public navParams : NavParams, public luckyService:LuckyService){
		this.menu.enable(true);		
	}

	ngOnInit(){
		this.luckyformFields();
		this.itemsList();
	}

	itemsList(){		
		this.itemService.items().subscribe(data => {
	    	if(data['status']){
	    		//this.presentLoadingDismiss();
		    	this.items = data['itemsList'];
			    console.log(this.items);
			}else{
				//this.presentLoadingDismiss();
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}

	getItemById(event){
		this.digits = [];
		/*if(this.t.length > 0){
		this.luckyForm.controls['pages'].setValue([]);
		}*/
		if(this.t.length > 0){
		const emptyArray = <FormArray>this.luckyForm.controls.pages;
		emptyArray.controls = [];
		}
  		this.itemService.item(event.detail.value).subscribe(data => {
  			let c;
  			if(data['itemDetails'].item_digits == 2){
  				c = 2;
  			}else{
	    		c = data['itemDetails'].item_digits;
	    	}
	    	const numberOfProjects = c || 0;
	    	for(let i = 1;i <= data['itemDetails'].item_digits;i++){
	    		this.digits.push(i);
		        if (this.t.length < numberOfProjects) {
		            for (let i = this.t.length; i < numberOfProjects; i++) {
		            	this.t.push(this.formBuilder.group({
		                    price: ['', Validators.required],
				            bonus: ['', Validators.required],
				            stbonus: ['', Validators.required]
		                }));
		            }
		        }
	    	}    	
	    	console.log(this.digits);
	    },error => {
	        console.log(error);
	    });
  	}
  	get f() { return this.luckyForm.controls; }
    get t() { return this.f.pages as FormArray; }

	luckyformFields(){
		this.luckyForm = this.formBuilder.group({
            item_id: ['', Validators.required],
            pages: new FormArray([])
        });
	}

	luckyCreation(){
		this.submitted = true;
		if (this.luckyForm.invalid) {
			return;
        }
        console.log(this.luckyForm.controls['pages'].value);
        this.luckyService.createLuckyprice(this.luckyForm.controls['item_id'].value,this.luckyForm.controls['pages'].value).subscribe(data=>{
        	if(data['status'] == 1){
        		this.closeLuckyModal(data['message']);
        	}
        });
	}

	closeLuckyModal(data:string=''){
		this.modalController.dismiss({
			'dismissed': true,
			'data':data
		});
	}
}
