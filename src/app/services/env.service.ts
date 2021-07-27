import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
	//IMG_URL = 'http://bhutanstarwinners.com/apiApp/public/';
	//API_URL = 'http://bhutanstarwinners.com/apiApp/api/auth/';
	IMG_URL = 'http://localhost:8080/php/projects/kingsApp/public/';
	API_URL = 'http://localhost:8080/php/projects/kingsApp/api/auth/';
	access_token: any;
	token_type: any;
	user: any;
	constructor() {
		if (localStorage.getItem('user_detail')) {
			this.token_type = JSON.parse(localStorage.getItem('user_detail')).token_type;
			this.access_token = JSON.parse(localStorage.getItem('user_detail')).access_token;
			this.user = JSON.parse(localStorage.getItem('user_detail')).user;
		}
	 }
}
