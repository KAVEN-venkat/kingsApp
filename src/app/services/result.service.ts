import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';
import { Time } from '@angular/common';
export interface ResultResponse {
  status: boolean;
  message:any;
  orders: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient,private env: EnvService,) { }

  results(user_type:number,result_from:Date,result_to:Date,customer_id:Number,item_time:Time): Observable<ResultResponse> {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		const url =this.env.API_URL + 'userResult';
		return this.http.post<ResultResponse>(url, {user_type:user_type,result_from:result_from,result_to:result_to,customer_id:customer_id,item_time:item_time}, { headers: headers }).pipe(tap(result => {
			return result;
		}));
	}
}
