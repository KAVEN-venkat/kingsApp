import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, MenuController, ActionSheetController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EnvService } from 'src/app/services/env.service';
import { CustomerService } from 'src/app/services/customer.service';
import { CountryService } from 'src/app/services/country.service';
import { StateService } from 'src/app/services/state.service';
import { CityService } from 'src/app/services/city.service';
import { AlertService } from 'src/app/services/alert.service';
//import SignaturePad from 'signature_pad';
import {File, IWriteOptions, FileEntry} from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Base64 } from '@ionic-native/base64/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
	profileForm: FormGroup;
	submitted = false;
	user_id: any;
	customer:any;
	img_url:String;
	countries:any;
	states:any;
	cities:any;
	image;
	imageData;
	user: any;
	constructor(private modalController: ModalController, private navCtrl: NavController, private menu: MenuController,private customerService: CustomerService,private countryService: CountryService,private stateService: StateService,private cityService: CityService,private alertService: AlertService,private router: Router, private env:EnvService, private activatedRoute: ActivatedRoute,private formBuilder: FormBuilder, private file: File, private camera: Camera, public loadingController: LoadingController, public actionSheetController: ActionSheetController,private webview: WebView,private base64: Base64) { 
		this.img_url = this.env.IMG_URL;
		this.user = JSON.parse(localStorage.getItem('user_detail')).user.id;
		if (this.activatedRoute.snapshot.paramMap.get('id')) {
			this.user_id = this.activatedRoute.snapshot.paramMap.get('id');
		}
		this.image=this.img_url+'images/no_img.png';
		this.getCountries();
		this.getUser();
		this.profileFormValidation();
	}

	ngOnInit() {
		if(!localStorage.getItem('user_detail')){
			this.navCtrl.navigateRoot('/');
		}
	}

	profileFormValidation() {
		this.profileForm = this.formBuilder.group({
            first_name: ['', Validators.required],
            last_name: [''],
            address: [''],
            city: [''],
            state: [''],
            country: ['', Validators.required],
            pincode: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            mobile:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        });
	}

	getCountries(){
		//alert(this.user_id);
		//this.presentLoading();
		this.countryService.countries().subscribe(data => {
	    	//this.presentLoadingDismiss();
	    	if(data['status']){
	    	this.countries = data['countiresList'];
		    //console.log(this.countries);
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}

	getStates(event){ 
		//alert(this.user_id);
		//this.presentLoading();
		this.stateService.states(event.detail.value).subscribe(data => {
	    	//this.presentLoadingDismiss();
	    	if(data['status']){
	    	this.states = data['statesList'];
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}

	getCities(event){ 
		//alert(this.user_id);
		//this.presentLoading();
		this.cityService.cities(event.detail.value).subscribe(data => {
	    	//this.presentLoadingDismiss();
	    	if(data['status']){
	    	this.cities = data['citiesList'];
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}

	getUser(){
		//alert(this.user_id);
		//this.presentLoading();
		
		this.customerService.customer(this.user_id).subscribe(data => {
	    	console.log(data['customerDetails'].state);
	    	//this.presentLoadingDismiss();
	    	//let result = JSON.stringify(data);
	    	if(data['status']){
	    	this.customer = data['customerDetails'];
			/*this.profileForm = this.formBuilder.group({
				first_name: [this.customer.first_name, Validators.required],
	            last_name: [this.customer.last_name],
	            address: [this.customer.address],
	            country: [this.customer.country, Validators.required],
	            city: [this.customer.city],
	            state: [this.customer.state],
	            pincode: [this.customer.postcode, Validators.required],
	            email: [this.customer.email, [Validators.required, Validators.email]],
	            mobile: [this.customer.mobile, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
			});*/
			localStorage.setItem('first_name',this.customer.first_name);
			localStorage.setItem('last_name',this.customer.last_name);
			localStorage.setItem('email',this.customer.email);
			this.profileForm.controls['first_name'].setValue(this.customer.first_name);
			this.profileForm.controls['last_name'].setValue(this.customer.last_name);
			this.profileForm.controls['address'].setValue(this.customer.address);
			this.profileForm.controls['email'].setValue(this.customer.email);
			this.profileForm.controls['mobile'].setValue(this.customer.mobile);
			this.profileForm.controls['country'].setValue(this.customer.country);
			this.profileForm.controls['state'].setValue(this.customer.state);
			this.profileForm.controls['city'].setValue(this.customer.city);
			this.profileForm.controls['pincode'].setValue(this.customer.postcode);
			if(this.customer.photo != null)
				this.image = this.img_url + "uploads/profile/" + this.customer.photo;
			else
				this.image = this.img_url+"images/no_img.png";
		    //console.log(this.customer);
			}else{
		    	this.alertService.presentToast(data['message']);
	    	}
	    },error => {
	        console.log(error);
	    });
	}
	readFile(file: any) {
		let body = { 'image_data': file };
		this.customerService.uploadFile(body,this.user_id).subscribe(dataRes => {
		    	console.log(dataRes);
		    });
		/*const reader = new FileReader();
		reader.onloadend = () => {
			const imgBlob = new Blob([reader.result], {
			type: file.type
			});
			const formData = new FormData();
			//formData.append('name', 'Hello');
			formData.append('file', imgBlob, file.name);
			//console.log(formData);
			this.customerService.uploadFile(formData,this.user_id).subscribe(dataRes => {
		    	console.log(dataRes);
		    });
		};
		reader.readAsArrayBuffer(file);*/
	}
	takePicture(options) {
		this.camera.getPicture(options).then((imageData) => {
			this.imageData = imageData;
    		//this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
    		this.image = this.webview.convertFileSrc(imageData);
			this.base64.encodeFile(this.imageData).then((base64File: string) => {
				console.log(base64File);
				this.readFile(base64File);
			}, (err) => {
				console.log(err);
			});
			/*this.file.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
				entry.file(file => {
					//console.log(file);
					this.readFile(file);
				});
			});*/
		}, (err) => {
			// Handle error
		});
	}
	pickImage(sourceType){
		const options: CameraOptions = {
		    quality: 100,
			sourceType: sourceType,
			destinationType: this.camera.DestinationType.FILE_URI,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE,
			correctOrientation: true
		};
		this.takePicture(options);
	}
	async selectImage() {
		const actionSheet = await this.actionSheetController.create({
			header: "Select Image source",
			buttons: [{
				text: 'Load from Library',
				handler: () => {
					this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
				}
			},
			{
				text: 'Use Camera',
				handler: () => {
					this.pickImage(this.camera.PictureSourceType.CAMERA);
				}
			},
			{
				text: 'Cancel',
				role: 'cancel'
			}]
		});
		await actionSheet.present();
	}
	updateProfile(){
		this.submitted = true;
        if (this.profileForm.invalid) {
            return;
        }
        //this.presentLoading();
        this.customerService.updateCustomer(this.profileForm.value.first_name,this.profileForm.value.last_name,this.profileForm.value.mobile,this.profileForm.value.email,this.profileForm.value.address,this.profileForm.value.country,this.profileForm.value.state,this.profileForm.value.city,this.profileForm.value.pincode,this.user_id).subscribe(data => {

	    	console.log(data);
	    	if(data['status'] == 1){
	    		//this.presentLoadingDismiss();
		    	this.alertService.presentToast(data['message']);
		    }else{
		    	this.alertService.presentToast(data['message']);
	    	}			
	    },error => {
	        console.log(error);
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
