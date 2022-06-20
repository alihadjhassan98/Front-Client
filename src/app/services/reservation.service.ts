import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  URL:string="http://localhost:8082/Reservations";

  constructor(private httpClient:HttpClient) { }
  getAllRes(){
   return this.httpClient.get(this.URL);
  }
  getResById(id:number){
    return this.httpClient.get(`${this.URL}/${id}`);
  }
  addRes(res:any){
  return this.httpClient.post(this.URL,res);
  
  }
  deleteRes(id:number){
    return this.httpClient.delete(`${this.URL}/${id}`);
  }
  editRes(res:any){
    console.log('here into service', res);
    
    return this.httpClient.put(`${this.URL}/${res.id}`,res);
  }


  numberOfRes() {
    return this.httpClient.get(`${this. URL}/resnumb`);
  }
}
