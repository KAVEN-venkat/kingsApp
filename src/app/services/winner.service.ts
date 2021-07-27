import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';

export interface WinnerResponse {
  status: boolean;
  message:any;
  winners: string;
}

@Injectable({
  providedIn: 'root'
})
export class WinnerService {
	constructor(private http: HttpClient,private env: EnvService,
	) { 
		
	}
	createWinner(winner_date,result_time,winner_a,winner_b,winner_c,winner_d,winner_e) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.post(this.env.API_URL + 'winner',{winner_date:winner_date,result_time:result_time,winner_a:winner_a,winner_b:winner_b,winner_c:winner_c,winner_d:winner_d,winner_e:winner_e}, { headers: headers });
		//return fname;
	}

	winnerLists(): Observable<WinnerResponse> {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.get<WinnerResponse>(this.env.API_URL + 'winner', { headers: headers }).pipe(tap(winner => {
			return winner;
		}));
	}
}
