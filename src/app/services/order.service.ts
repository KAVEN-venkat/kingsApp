import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';
export interface OrderResponse {
  status: boolean;
  message:any;
  orders: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
	constructor(private http: HttpClient,private env: EnvService,
	) { 
		
	}
	createOrder(customer_id:Number,category_id: Number, extra_price:String, item_digits: String, item_from: Number, item_id: Number, item_price: String, item_qty: Number, item_to: Number, sale_date: String, maxLength: Number,board: String, billNo:String) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.post(this.env.API_URL + 'createOrder',{customer_id:customer_id,category_id: category_id, extra_price:extra_price, item_digits: item_digits, item_from: item_from, item_id: item_id, item_price: item_price, item_qty: item_qty, item_to: item_to, sale_date: sale_date, maxLength:maxLength,board:board,billNo:billNo}, { headers: headers });
		//return fname;
	}
	orderCount(): Observable<OrderResponse> {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.get<OrderResponse>(this.env.API_URL + 'orders/count', { headers: headers }).pipe(tap(order => {
			return order;
		}));
	}
	orderLists(limit): Observable<OrderResponse> {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		let url;
		if(limit == 'all'){
			url = this.env.API_URL + 'orders';
		}else{
			url =this.env.API_URL + 'orders/'+limit;
		}
		return this.http.get<OrderResponse>(url, { headers: headers }).pipe(tap(order => {
			return order;
		}));
	}

	orderByUser(userId): Observable<OrderResponse> {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		const url =this.env.API_URL + 'orderByUser/'+userId;
		return this.http.get<OrderResponse>(url, { headers: headers }).pipe(tap(order => {
			return order;
		}));
	}

	deleteOrder(orderId) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.delete(this.env.API_URL + 'deleteOrder/'+orderId, { headers: headers }).pipe(tap(order => {
			return order;
		}));
	}

	totalOrder(): Observable<OrderResponse> {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		const url =this.env.API_URL + 'orderTotal';
		return this.http.get<OrderResponse>(url, { headers: headers }).pipe(tap(order => {
			return order;
		}));
	}
}
