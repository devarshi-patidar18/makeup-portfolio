import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { }

  bridalServices = [
    { id: 1, name: 'Pre-wedding trials', ImageUrl: 'assets/bridal/bridal_1.jpeg' },
    { id: 2, name: 'Airbrush available', ImageUrl: 'assets/bridal/bridal_2.jpeg' },
    { id: 3, name: 'Bridal party packages', ImageUrl: 'assets/bridal/bridal_3.jpeg' },
    { id: 4, name: 'Touch-up kit included', ImageUrl: 'assets/bridal/bridal_4.jpeg' }
  ];

  partyServices = [
    { id: 1, name: 'Festive looks', ImageUrl: 'assets/party/Party_1.jpeg' },
    { id: 2, name: 'HD makeup', ImageUrl: 'assets/party/Party_2.jpeg' },
    { id: 3, name: 'Quick turnaround', ImageUrl: 'assets/party/Party_1.jpeg' },
    { id: 4, name: 'All skin types', ImageUrl: 'assets/party/Party_2.jpeg' }
  ];

  preweddingServices = [
    { id: 1, name: 'Camera-ready looks', ImageUrl: 'assets/bridal/bridal_1.jpeg' },
    { id: 2, name: 'Waterproof formulas', ImageUrl: 'assets/bridal/bridal_2.jpeg' },
    { id: 3, name: 'Outdoor experience', ImageUrl: 'assets/bridal/bridal_3.jpeg' },
    { id: 4, name: 'Professional lighting knowledge', ImageUrl: 'assets/bridal/bridal_4.jpeg' }
  ];

  photoshootServices = [
    { id: 1, name: 'Camera-ready looks', ImageUrl: 'assets/bridal/bridal_1.jpeg' },
    { id: 2, name: 'Waterproof formulas', ImageUrl: 'assets/bridal/bridal_2.jpeg' },
    { id: 3, name: 'Outdoor experience', ImageUrl: 'assets/bridal/bridal_3.jpeg' },
    { id: 4, name: 'Professional lighting knowledge', ImageUrl: 'assets/bridal/bridal_4.jpeg' }
  ];


}
