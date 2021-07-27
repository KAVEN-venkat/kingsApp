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
export class LuckyService {
	constructor(private http: HttpClient,private env: EnvService,
	) { 
		
	}
	createLuckyprice(itemId,prices) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.post(this.env.API_URL + 'createLucky',{itemId: itemId,prices:prices}, { headers: headers });
		//return fname;
	}

	luckpriceLists(): Observable<OrderResponse> {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.get<OrderResponse>(this.env.API_URL + 'luckyPrice', { headers: headers }).pipe(tap(luckyprice => {
			return luckyprice;
		}));
	}

	luckyById(luckyId) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.get<OrderResponse>(this.env.API_URL + 'luckyPrice/'+luckyId, { headers: headers }).pipe(tap(item => {
			return item;
		}));
	}

	updateLucky(lucky_id:Number,price: String,bonus:String,stbonus:String) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.put(this.env.API_URL + 'luckyPrice/'+lucky_id,{price: price,bonus:bonus,stbonus:stbonus}, { headers: headers });
		//return fname;
	}
	deleteLucky(luckyId) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.delete(this.env.API_URL + 'luckyPrice/'+luckyId, { headers: headers }).pipe(tap(item => {
			return item;
		}));
	}

}
