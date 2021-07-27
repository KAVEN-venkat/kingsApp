import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Storage } from '@ionic/storage';
import { EnvService } from './env.service';
import { User } from '../modals/user';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ToastController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	isLoggedIn = false;
	token: any;
	authState = new BehaviorSubject(false);
	constructor(private http: HttpClient,private nativeStorage: NativeStorage,private storage: Storage,private env: EnvService,
		private platform: Platform, public toastController: ToastController,private router: Router,) {
		this.platform.ready().then(() => {
			this.ifLoggedIn();
		});
	}
	ifLoggedIn() {
		if (this.platform.is('mobileweb')) {
			if (localStorage.getItem('user_detail')) {
				this.authState.next(true);
			}
		} else {
			this.nativeStorage.getItem('user_detail').then((response) => {
				if (response) {
					this.authState.next(true);
				}
			});
		}
  	}
	login(mobile: Number, password: String) {
		return this.http.post(this.env.API_URL + 'login',{mobile: mobile, password: password}).pipe(tap(result => {
			//console.log(result['user_detail']);
			if (this.platform.is('mobileweb')) {
				//this.token = token;
				//this.isLoggedIn = true;
				this.authState.next(true);
				return result;
			} else {
				
				this.nativeStorage.setItem('user_detail', result['user_detail']).then(() => {
					console.log(result);
					this.authState.next(true);
				}, error => console.error('Error storing item', error)
				);
			}
			/*this.storage.set('USER_INFO', result['user_detail']).then((response) => {
      			this.router.navigate(['home']);
      			this.authState.next(true);
    		});*/
		}));
	}
	register(fname: String,lname: String,mno: Number,email: String,pwd: String,userType:String) {
		return this.http.post(this.env.API_URL + 'register',{first_name: fname, last_name: lname, email: email, password: pwd, mobile: mno,userType:userType});
		//return fname;
	}
	
	verifyOtp(user_id: String, otp: Number){
		return this.http.post(this.env.API_URL + 'verify',{user_id: user_id, otp: otp});
	}
	logout() {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.get(this.env.API_URL + 'logout', { headers: headers })
		.pipe(tap(data => {
			this.storage.remove("token");
			this.isLoggedIn = false;
			delete this.token;
			return data;
		}));
	}
	
	user() {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.get<User>(this.env.API_URL + 'user', { headers: headers }).pipe(tap(user => {
			return user;
		}));
	}
	getToken() {
		return this.storage.get('token').then(data => {
			this.token = data;
			if(this.token != null) {
				this.isLoggedIn=true;
			} else {
				this.isLoggedIn=false;
			}
		},error => {
			this.token = null;
			this.isLoggedIn=false;
		});	
	}
	isAuthenticated() {
		return this.authState.value;
	}
}
