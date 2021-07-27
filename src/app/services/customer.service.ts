import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';

export interface CustomerResponse {
  status: boolean;
  message:any;
  customers: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
	token:any;
	constructor(private http: HttpClient,private storage: NativeStorage,private env: EnvService,
	) { 
		
	}
	createCustomer(fname: String,lname: String,mno: Number,email: String,pwd: String,userType:String) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.post(this.env.API_URL + 'createCustomer',{first_name: fname, last_name: lname, email: email, password: pwd, mobile: mno,userType:userType}, { headers: headers });
		//return fname;
	}
	customers(): Observable<CustomerResponse> {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.get<CustomerResponse>(this.env.API_URL + 'customers', { headers: headers }).pipe(tap(customer => {
			return customer;
		}));
	}
	customersByType(userType:any): Observable<CustomerResponse> {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.get<CustomerResponse>(this.env.API_URL + 'customersByType/'+userType, { headers: headers }).pipe(tap(customer => {
			return customer;
		}));
	}
	customer(customerId) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		if (localStorage.getItem('user_detail')) {
			return this.http.get<CustomerResponse>(this.env.API_URL + 'customer/' + customerId, { headers: headers }).pipe(tap(user => {
				return user;
			}));
		}
	}
	updateCustomer(fname: String, lname: String, mno: Number, email: String, address:String, country:String, state:String, city:String, pincode:String,UserId:String) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.patch(this.env.API_URL + 'updateCustomer/'+UserId,{first_name: fname, last_name: lname, email: email, address: address, mobile: mno,country:country,state:state,city:city,postcode:pincode}, { headers: headers });
		//return fname;
	}
	deleteCustomer(customerId) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.delete(this.env.API_URL + 'deleteCustomer/'+customerId, { headers: headers }).pipe(tap(user => {
			return user;
		}));
	}
	createCustomerPrice(userId:Number, extraPrice:String ,itemId:Number){
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.post(this.env.API_URL + 'createPrice',{user_id: userId, extra_price: extraPrice, item_id: itemId}, { headers: headers });
	}
	customerPrice(customerId,ItemId=0) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		if(ItemId != 0){
			return this.http.get(this.env.API_URL + 'getPrice/'+customerId+'/'+ItemId, { headers: headers }).pipe(tap(user => {
				return user;
			}));
		}else{
			return this.http.get(this.env.API_URL + 'getPrice/'+customerId, { headers: headers }).pipe(tap(user => {
				return user;
			}));
		}
	}
	uploadFile(formData,customerId):Observable<any> {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.patch(this.env.API_URL + 'uploadImage/'+customerId, formData, { headers: headers });
	}
}
