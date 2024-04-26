import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../app.component';
import { Observable } from 'rxjs';
import { Customer } from '../domain/customer';
import { SessionStorageService } from './session-storage.service';
import { LoginService } from './auth/login.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url:string = `${API_URL}/api/v1/customers`
  token = this.loginService.userToken;
  headers = new HttpHeaders({
    Authorization:
      `Bearer ${this.token}`,
  });

  //inyeccion de dependencias
  constructor(public httpClient:HttpClient, private loginService: LoginService) {  }

  findAll():Observable<Customer[]>{
    // Configurar el encabezado con el token bearer
    return this.httpClient.get<Customer[]>(this.url, { headers: this.headers });
  }

  findById(id:number):Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.url}/${id}`)
  }

  save(customer:Customer):Observable<Customer>{
    return this.httpClient.post<Customer>(this.url,customer,{ headers: this.headers });
  }

  update(customer:Customer):Observable<Customer>{
    return this.httpClient.put<Customer>(this.url,customer);
  }

  delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.url}/${id}`)
  }
}
