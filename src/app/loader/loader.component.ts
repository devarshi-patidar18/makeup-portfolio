import { Component } from '@angular/core';
import { DataStoreService } from '../services/data-store.service';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {

  constructor(public dataStore: DataStoreService) { }


}
