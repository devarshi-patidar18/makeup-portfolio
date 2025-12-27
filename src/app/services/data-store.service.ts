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
      { id: 1, name: 'Pre-wedding trials', imageUrl: '/bridal/pre-wedding-trials.jpeg', preference: 'best' },
      { id: 2, name: 'Airbrush available', imageUrl: '/bridal/airbrush-available.jpeg', preference: 'portfolio' },
      { id: 3, name: 'Bridal party packages', imageUrl: '/bridal/bridal-party-packages.jpeg', preference: 'portfolio' },
      { id: 4, name: 'Touch-up kit included', imageUrl: '/bridal/touch-up-kit-included.jpeg', preference: 'portfolio' }
    ],

    party: [
      { id: 1, name: 'Festive looks', imageUrl: '/party/festive-looks.jpeg', preference: 'best' },
      { id: 2, name: 'HD makeup', imageUrl: '/party/hd-makeup.jpeg', preference: 'portfolio' },
      { id: 3, name: 'Quick turnaround', imageUrl: '/party/quick-turnaround.jpeg', preference: 'portfolio' },
      { id: 4, name: 'All skin types', imageUrl: '/party/all-skin-types.jpeg', preference: 'portfolio' }
    ],

    prewedding: [
      { id: 1, name: 'Camera-ready looks', imageUrl: '/prewedding/camera-ready-looks.jpeg', preference: 'best' },
      { id: 2, name: 'Waterproof formulas', imageUrl: '/prewedding/waterproof-formulas.jpeg', preference: 'best' },
      { id: 3, name: 'Outdoor experience', imageUrl: '/prewedding/outdoor-experience.jpeg', preference: 'portfolio' },
      { id: 4, name: 'Professional lighting knowledge', imageUrl: '/prewedding/professional-lighting-knowledge.jpeg', preference: 'portfolio' },
      { id: 5, name: 'Multiple look options', imageUrl: '/prewedding/multiple-look-options.jpeg', preference: 'portfolio' },
      { id: 6, name: 'Touch-ups throughout shoot', imageUrl: '/prewedding/touch-ups-throughout-shoot.jpeg', preference: 'best' },
      { id: 7, name: 'Experienced artists', imageUrl: '/prewedding/experienced-artists.jpeg', preference: 'portfolio' }
    ],

    photoshoot: [
      { id: 1, name: 'Camera-ready looks', imageUrl: '/photoshoot/camera-ready-looks.jpeg', preference: 'best' },
      { id: 2, name: 'Waterproof formulas', imageUrl: '/photoshoot/waterproof-formulas.jpeg', preference: 'portfolio' },
      { id: 3, name: 'Outdoor experience', imageUrl: '/photoshoot/outdoor-experience.jpeg', preference: 'portfolio' },
      { id: 4, name: 'Professional lighting knowledge', imageUrl: '/photoshoot/professional-lighting-knowledge.jpeg', preference: 'portfolio' }
    ],

    hairstyles: [
      { id: 1, name: 'Bridal hairstyles', imageUrl: '/hairstyles/bridal-hairstyles.jpeg', preference: 'portfolio' },
      { id: 2, name: 'Party hairstyles', imageUrl: '/hairstyles/party-hairstyles.jpeg', preference: 'best' },
      { id: 3, name: 'Pre-wedding styles', imageUrl: '/hairstyles/pre-wedding-styles.jpeg', preference: 'portfolio' },
      { id: 4, name: 'Photoshoot styles', imageUrl: '/hairstyles/photoshoot-styles.jpeg', preference: 'portfolio' }
    ]
  };


  // Backwards-compatible aliases for existing code — prefer using `services` going forward
  // bridalServices: any = [];
  // partyServices: any = [];
  // preweddingServices: any = [];
  // photoshootServices: any = [];
  // hairstylesServices: any = [];

  selectedServiceType: string = '';

  arrayOfObjectsToCommaString<T>(
    arr: T[],
    key: keyof T
  ): string {
    return arr.map(item => String(item[key])).join(', ');
  }

  isPageLoading: boolean = false;

}
