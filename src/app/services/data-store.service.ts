import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() {
    // point aliases to the combined catalog arrays
    // this.bridalServices = this.services['bridal'];
    // this.partyServices = this.services['party'];
    // this.preweddingServices = this.services['prewedding'];
    // this.photoshootServices = this.services['photoshoot'];
    // this.hairstylesServices = this.services['hairstyles'];
  }

  // Header Menu Items
  headerMenuItems = [
    { name: 'Home', route: '/' },
    { name: 'Services', route: '/services' },
    { name: 'About Artist', route: '/artists' },
    { name: 'Book Inquiry', route: '/inquiry' },
    { name: 'Portfolio', route: '/portfolio' }
  ];

  // Combined services catalog — central place for all service lists
  services: { [key: string]: any[] } = {
    bridal: [
      { id: 1, name: 'Pre-wedding trials', ImageUrl: '/bridal/bridal_1.jpeg', preference: 'best' },
      { id: 2, name: 'Airbrush available', ImageUrl: '/bridal/bridal_2.jpeg', preference: 'portfolio' },
      { id: 3, name: 'Bridal party packages', ImageUrl: '/bridal/bridal_3.jpeg', preference: 'portfolio' },
      { id: 4, name: 'Touch-up kit included', ImageUrl: '/bridal/bridal_4.jpeg', preference: 'portfolio' }
    ],
    party: [
      { id: 1, name: 'Festive looks', ImageUrl: '/party/Party_1.jpeg', preference: 'best' },
      { id: 2, name: 'HD makeup', ImageUrl: '/party/Party_2.jpeg', preference: 'portfolio' },
      { id: 3, name: 'Quick turnaround', ImageUrl: '/party/Party_1.jpeg', preference: 'portfolio' },
      { id: 4, name: 'All skin types', ImageUrl: '/party/Party_2.jpeg', preference: 'portfolio' }
    ],
    prewedding: [
      { id: 1, name: 'Camera-ready looks', ImageUrl: '/bridal/bridal_1.jpeg', preference: 'best' },
      { id: 2, name: 'Waterproof formulas', ImageUrl: '/bridal/bridal_2.jpeg', preference: 'best' },
      { id: 3, name: 'Outdoor experience', ImageUrl: '/bridal/bridal_3.jpeg', preference: 'portfolio' },
      { id: 4, name: 'Professional lighting knowledge', ImageUrl: '/bridal/bridal_4.jpeg', preference: 'portfolio' },
      { id: 5, name: 'Multiple look options', ImageUrl: '/bridal/bridal_5.jpeg', preference: 'portfolio' },
      { id: 6, name: 'Touch-ups throughout shoot', ImageUrl: '/bridal/bridal_6.jpeg', preference: 'best' },
      { id: 7, name: 'Experienced artists', ImageUrl: '/bridal/bridal_7.jpeg', preference: 'portfolio' }
    ],
    photoshoot: [
      { id: 1, name: 'Camera-ready looks', ImageUrl: '/bridal/bridal_1.jpeg', preference: 'best' },
      { id: 2, name: 'Waterproof formulas', ImageUrl: '/bridal/bridal_2.jpeg', preference: 'portfolio' },
      { id: 3, name: 'Outdoor experience', ImageUrl: '/bridal/bridal_3.jpeg', preference: 'portfolio' },
      { id: 4, name: 'Professional lighting knowledge', ImageUrl: '/bridal/bridal_4.jpeg', preference: 'portfolio' }
    ],
    hairstyles: [
      { id: 1, name: 'Bridal hairstyles', ImageUrl: '/hairstyles/hairstyle_1.jpeg', preference: 'best' },
      { id: 2, name: 'Party hairstyles', ImageUrl: '/hairstyles/hairstyle_2.jpeg', preference: 'portfolio' },
      { id: 3, name: 'Pre-wedding styles', ImageUrl: '/hairstyles/hairstyle_3.jpeg', preference: 'portfolio' },
      { id: 4, name: 'Photoshoot styles', ImageUrl: '/hairstyles/hairstyle_4.jpeg', preference: 'portfolio' }
    ]
  };

  // Backwards-compatible aliases for existing code — prefer using `services` going forward
  // bridalServices: any = [];
  // partyServices: any = [];
  // preweddingServices: any = [];
  // photoshootServices: any = [];
  // hairstylesServices: any = [];

  selectedServiceType: string = '';

}
