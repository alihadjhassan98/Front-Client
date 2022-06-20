import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  URL:string="http://localhost:8082/Seances";

  constructor(private httpClient:HttpClient) { }
  getAllSeance(){
   return this.httpClient.get(this.URL);
  }
  getSeanceById(id:number){
    return this.httpClient.get(`${this.URL}/${id}`);
  }
  addSeance(Seance:any){
  return this.httpClient.post(this.URL,Seance);
  
  }
  deleteSeance(id:number){
    return this.httpClient.delete(`${this.URL}/${id}`);
  }
  editSeance(Seance:any){
    console.log('here into service', Seance);
    
    return this.httpClient.put(`${this.URL}/${Seance.id}`,Seance);
  }
  
}

