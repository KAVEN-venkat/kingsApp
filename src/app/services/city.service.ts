import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';
export interface CityResponse {
  status: boolean;
  message:any;
  cities: string;
}

@Injectable({
  providedIn: 'root'
})
export class CityService {
	constructor(private http: HttpClient,private env: EnvService) { }
	cities(stateId): Observable<CityResponse> {
		return this.http.get<CityResponse>(this.env.API_URL + 'cities/'+stateId).pipe(tap(city => {
			return city;
		}));
	}
}
