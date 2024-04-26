import { Injectable } from '@angular/core';
import { API_URL } from '../app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentType } from '../domain/document-type';
import { SessionStorageService } from './session-storage.service';
import { LoginService } from './auth/login.service';

@Injectable({
  providedIn: 'root',
})
export class DocumentTypeService {
  url: string = `${API_URL}/api/v1/document-type`;
  token = this.loginService.userToken;
  headers = new HttpHeaders({
    Authorization:
      `Bearer ${this.token}`,
  });

  constructor(public httpClient: HttpClient, private loginService: LoginService) {}
  findAll(): Observable<DocumentType[]> {
    return this.httpClient.get<DocumentType[]>(this.url, { headers: this.headers });
  }

  findById(id: number): Observable<DocumentType> {
    return this.httpClient.get<DocumentType>(`${this.url}/${id}`);
  }
}
