import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';
export interface CountryResponse {
  status: boolean;
  message:any;
  countries: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

	constructor(private http: HttpClient,private env: EnvService) { }
	countries(): Observable<CountryResponse> {
		return this.http.get<CountryResponse>(this.env.API_URL + 'countries').pipe(tap(country => {
			return country;
		}));
	}
}
