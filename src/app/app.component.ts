import { Component } from '@angular/core';
import { SessionStorageService } from './service/session-storage.service';

export const API_URL = 'http://localhost:8080';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank-front';

  constructor(private sessionStorageService: SessionStorageService) {}

  saveTokenToSessionStorage(token: string): void {
    this.sessionStorageService.setToken(token);
  }
}
