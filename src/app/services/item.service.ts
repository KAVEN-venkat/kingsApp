import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';

export interface ItemResponse {
  status: boolean;
  message:any;
  items: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

	constructor(private http: HttpClient,private storage: NativeStorage,private env: EnvService,
	) { 
		
	}            
	createItem(category_id:String,item_name: String,item_digits: String,result_time: Number,result_code: String,item_price: String) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.post(this.env.API_URL + 'createItem',{category_id:category_id,item_name: item_name, item_digits: item_digits, result_time: result_time, result_code: result_code, item_price: item_price}, { headers: headers });
		//return fname;
	}
	items(): Observable<ItemResponse> {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.get<ItemResponse>(this.env.API_URL + 'items', { headers: headers }).pipe(tap(item => {
			return item;
		}));
	}
	item(itemId) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.get<ItemResponse>(this.env.API_URL + 'item/'+itemId, { headers: headers }).pipe(tap(item => {
			return item;
		}));
	}
	itemByColumn(itemId,columnName) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.get<ItemResponse>(this.env.API_URL + 'item/'+itemId+'/'+columnName, { headers: headers }).pipe(tap(item => {
			return item;
		}));
	}
	itemByCategory(categoryId) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.get<ItemResponse>(this.env.API_URL + 'itemcategory/'+categoryId, { headers: headers }).pipe(tap(item => {
			return item;
		}));
	}
	updateItem(category_id:String,item_name: String,item_digits: String,result_time: Number,result_code: String,item_price: String,itemId:Number) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.patch(this.env.API_URL + 'updateItem/'+itemId,{category_id:category_id,item_name: item_name, item_digits: item_digits, result_time: result_time, result_code: result_code, item_price: item_price}, { headers: headers });
		//return fname;
	}
	deleteItem(itemId) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.delete(this.env.API_URL + 'deleteItem/'+itemId, { headers: headers }).pipe(tap(item => {
			return item;
		}));
	}
	itemsTime(): Observable<ItemResponse> {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.get<ItemResponse>(this.env.API_URL + 'itemsTime', { headers: headers }).pipe(tap(item => {
			return item;
		}));
	}
}
