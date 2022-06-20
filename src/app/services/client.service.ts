import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  ClientURL:string="http://localhost:8082/clients";
  host:string="http://localhost:8082";
  public addclientForm!: FormGroup;
  
  constructor(private httpClient:HttpClient) { }

  getAllClients(){
    return this.httpClient.get(this. ClientURL);
  }
  getClientById(id:number){
    return this.httpClient.get(`${this. ClientURL}/${id}`);
  }
  addClient(client:FormData){
  return this.httpClient.post(this. ClientURL,client);
  }
  deleteClient(id:number){
    return this.httpClient.delete(`${this. ClientURL}/${id}`);
  }
  editClient(client:any) {

    
    return this.httpClient.put(`${this. ClientURL}/${client.id}`,client);
  }
  uploadFile(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
        reportProgress: true,
        responseType: 'text'
    });
  
    return this.httpClient.request(req);
   }
  

   numberOfClients() {
    return this.httpClient.get(`${this. ClientURL}/clientnumb`);
  }
  
  
  }