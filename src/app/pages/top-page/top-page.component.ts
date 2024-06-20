import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css']
})
export class TopPageComponent {
  constructor(private apiService: ApiService) {}

  get userRoute(): string {
    return this.apiService.isLoggedIn() ? '/home/conta' : '/login';
  }
}
