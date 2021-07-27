import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';

export interface CategoryResponse {
  status: boolean;
  message:any;
  categories: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
	token:any;
	constructor(private http: HttpClient,private storage: NativeStorage,private env: EnvService,
	) { 
		
	}
	createCategory(category_name: String) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.post(this.env.API_URL + 'category',{category_name: category_name}, { headers: headers });
		//return fname;
	}
	categories(): Observable<CategoryResponse> {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.get<CategoryResponse>(this.env.API_URL + 'category', { headers: headers }).pipe(tap(category => {
			return category;
		}));
	}
	category(categoryId) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.get<CategoryResponse>(this.env.API_URL + 'category/'+categoryId, { headers: headers }).pipe(tap(category => {
			return category;
		}));
	}
	updateCategory(category_id: Number,category_name: String) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.patch(this.env.API_URL + 'category/'+category_id,{category_name: category_name}, { headers: headers });
		//return fname;
	}
	deleteCategory(categoryId) {
		const headers = new HttpHeaders({
			'Authorization': this.env.token_type+" "+this.env.access_token
		});
		return this.http.delete(this.env.API_URL + 'category/'+categoryId, { headers: headers }).pipe(tap(category => {
			return category;
		}));
	}
}
