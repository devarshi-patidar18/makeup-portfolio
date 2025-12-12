import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { }

  // Header Menu Items
  headerMenuItems = [
    { name: 'Home', route: '/' },
    { name: 'Services', route: '/services' },
    { name: 'About Artist', route: '/artists' },
    { name: 'Book Inquiry', route: '/inquiry' },
    { name: 'Portfolio', route: '/portfolio' }
  ];

  bridalServices = [
    { id: 1, name: 'Pre-wedding trials', ImageUrl: '/bridal/bridal_1.jpeg', preference: 'best' },
    { id: 2, name: 'Airbrush available', ImageUrl: '/bridal/bridal_2.jpeg', preference: 'portfolio' },
    { id: 3, name: 'Bridal party packages', ImageUrl: '/bridal/bridal_3.jpeg', preference: 'portfolio' },
    { id: 4, name: 'Touch-up kit included', ImageUrl: '/bridal/bridal_4.jpeg', preference: 'portfolio' }
  ];

  partyServices = [
    { id: 1, name: 'Festive looks', ImageUrl: '/party/Party_1.jpeg', preference: 'best' },
    { id: 2, name: 'HD makeup', ImageUrl: '/party/Party_2.jpeg', preference: 'portfolio' },
    { id: 3, name: 'Quick turnaround', ImageUrl: '/party/Party_1.jpeg', preference: 'portfolio' },
    { id: 4, name: 'All skin types', ImageUrl: '/party/Party_2.jpeg', preference: 'portfolio' }
  ];

  preweddingServices = [
    { id: 1, name: 'Camera-ready looks', ImageUrl: '/bridal/bridal_1.jpeg', preference: 'best' },
    { id: 2, name: 'Waterproof formulas', ImageUrl: '/bridal/bridal_2.jpeg', preference: 'best' },
    { id: 3, name: 'Outdoor experience', ImageUrl: '/bridal/bridal_3.jpeg', preference: 'portfolio' },
    { id: 4, name: 'Professional lighting knowledge', ImageUrl: '/bridal/bridal_4.jpeg', preference: 'portfolio' },
    { id: 5, name: 'Multiple look options', ImageUrl: '/bridal/bridal_5.jpeg', preference: 'portfolio' },
    { id: 6, name: 'Touch-ups throughout shoot', ImageUrl: '/bridal/bridal_6.jpeg', preference: 'best' },
    { id: 7, name: 'Experienced artists', ImageUrl: '/bridal/bridal_7.jpeg', preference: 'portfolio' }
  ];

  photoshootServices = [
    { id: 1, name: 'Camera-ready looks', ImageUrl: '/bridal/bridal_1.jpeg', preference: 'best' },
    { id: 2, name: 'Waterproof formulas', ImageUrl: '/bridal/bridal_2.jpeg', preference: 'portfolio' },
    { id: 3, name: 'Outdoor experience', ImageUrl: '/bridal/bridal_3.jpeg', preference: 'portfolio' },
    { id: 4, name: 'Professional lighting knowledge', ImageUrl: '/bridal/bridal_4.jpeg', preference: 'portfolio' }
  ];


}
