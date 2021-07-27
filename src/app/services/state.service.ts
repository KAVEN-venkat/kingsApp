import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';
export interface StateResponse {
  status: boolean;
  message:any;
  states: string;
}

@Injectable({
  providedIn: 'root'
})
export class StateService {
	constructor(private http: HttpClient,private env: EnvService) { }
	states(countryId): Observable<StateResponse> {
		return this.http.get<StateResponse>(this.env.API_URL + 'states/'+countryId).pipe(tap(state => {
			return state;
		}));
	}
}
