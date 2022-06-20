import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  locURL:string="http://localhost:8082/Locales";

  constructor(private httpClient:HttpClient) { }
  getAllLocalees(){
   return this.httpClient.get(this.locURL);
  }
  getLocaleById(id:number){
    return this.httpClient.get(`${this.locURL}/${id}`);
  }
  addLocale(locale:any){
  return this.httpClient.post(this.locURL,locale);
  
  }
  deleteLocale(id:number){
    return this.httpClient.delete(`${this.locURL}/${id}`);
  }
  editLocale(locale:any){
    console.log('here into service', locale);
    
    return this.httpClient.put(`${this.locURL}/${locale.id}`,locale);
  }

  numberOfLocales() {
    return this.httpClient.get(`${this. locURL}/localenumb`);
  }

}
