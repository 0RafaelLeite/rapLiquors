import { Component, OnInit } from '@angular/core';
import { itemService } from './services/itens.service';
import { BackendItemService } from './services/backend-item.service';
import { Item } from './models/itemModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rapLiquors';

  constructor(private itemService: itemService, private backendItemService: BackendItemService) {}

  ngOnInit() {
    this.itemService.getItens().subscribe((data: Item[]) => {
      this.backendItemService.saveItems(data).subscribe(response => {
        console.log('Items saved successfully');
      }, error => {
        console.error('Error saving items', error);
      });
    });
  }
}
