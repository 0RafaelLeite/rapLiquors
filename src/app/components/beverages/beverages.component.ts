import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {
  beverages: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getBeverages();
  }

  getBeverages(): void {
  }

  addBeverage(beverage: any): void {
    this.apiService.createBeverage(beverage).subscribe(response => {
      console.log('Beverage added:', response);
      this.getBeverages();
    });
  }

  updateBeverage(id: string, beverage: any): void {
    this.apiService.updateBeverage(id, beverage).subscribe(response => {
      console.log('Beverage updated:', response);
      this.getBeverages();
    });
  }

  deleteBeverage(id: string): void {
    this.apiService.deleteBeverage(id).subscribe(response => {
      console.log('Beverage deleted:', response);
      this.getBeverages();
    });
  }

  updateStock(id: string, quantity: number): void {
    this.apiService.updateStock(id, quantity).subscribe(response => {
      console.log('Stock updated:', response);
      this.getBeverages();
    });
  }
}
