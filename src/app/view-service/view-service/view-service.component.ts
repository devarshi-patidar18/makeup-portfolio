import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataStoreService } from '../../services/data-store.service';

@Component({
  selector: 'app-view-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-service.component.html',
  styleUrl: './view-service.component.css'
})
export class ViewServiceComponent implements OnInit {
  serviceType: string = '';
  selectedImageIndex: number = 0;
  serviceData: any[] = [];
  serviceTitle: string = '';
  serviceDescription: string = '';

  serviceDescriptions: { [key: string]: any } = {
    bridal: {
      title: 'Bridal Makeup',
      description: 'Create your perfect wedding day look with our expert bridal makeup services. Includes professional trials, long-lasting formulas, and customized designs. Our bridal specialists understand the importance of your special day and ensure you look radiant in every moment and photograph.',
      details: [
        'Pre-wedding trials to find your perfect look',
        'Airbrush makeup for flawless finish',
        'Bridal party packages available',
        'Touch-up kit included for day-long perfection',
        'Professional makeup for all skin tones',
        'Custom designs based on your preferences'
      ]
    },
    party: {
      title: 'Party & Event Makeup',
      description: 'Glam up for any occasion with our party makeup services. From subtle to dramatic, we create looks that turn heads. Whether it\'s a festive celebration, corporate event, or night out, we have the perfect makeup style for you.',
      details: [
        'Festive and glamorous looks',
        'HD makeup that photographs beautifully',
        'Quick turnaround for last-minute bookings',
        'Suitable for all skin types',
        'Long-lasting formulas that stay all night',
        'Professional makeup artist consultations'
      ]
    },
    prewedding: {
      title: 'Pre-Wedding Photoshoot',
      description: 'Professional makeup for pre-wedding photography sessions. Optimized for cameras and lighting to ensure you look flawless in every shot. Our makeup artists specialize in creating looks that enhance your natural beauty while being camera-ready.',
      details: [
        'Camera-optimized makeup application',
        'Waterproof and sweat-resistant formulas',
        'Outdoor photography experience',
        'Professional lighting knowledge',
        'Multiple look options for variety',
        'Touch-ups throughout the shoot'
      ]
    },
    photoshoot: {
      title: 'Photoshoot Makeup',
      description: 'Professional makeup for photography and videography. Optimized for cameras and lighting to ensure you look flawless. Perfect for editorial shoots, model portfolios, music videos, and commercial projects.',
      details: [
        'Camera-ready looks for any style',
        'Waterproof formulas for long shoots',
        'Outdoor and studio experience',
        'Professional lighting knowledge',
        'Custom looks based on shoot theme',
        'Quick application and touch-up services'
      ]
    }
  };

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private dataStore: DataStoreService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const service = params['id'];
      if (service) {
        this.loadService(service);
      } else {
        this.router.navigate(['/services']);
      }
    });
  }

  loadService(serviceType: string) {
    this.serviceType = serviceType;
    const serviceConfig = this.serviceDescriptions[serviceType];

    if (!serviceConfig) {
      this.router.navigate(['/services']);
      return;
    }

    this.serviceTitle = serviceConfig.title;
    this.serviceDescription = serviceConfig.description;

    switch (serviceType) {
      case 'bridal':
        this.serviceData = this.dataStore.bridalServices;
        break;
      case 'party':
        this.serviceData = this.dataStore.partyServices;
        break;
      case 'prewedding':
        this.serviceData = this.dataStore.preweddingServices;
        break;
      case 'photoshoot':
        this.serviceData = this.dataStore.photoshootServices;
        break;
      default:
        this.router.navigate(['/services']);
    }
  }

  selectImage(index: number) {
    this.selectedImageIndex = index;
  }

  nextImage() {
    this.selectedImageIndex = (this.selectedImageIndex + 1) % this.serviceData.length;
  }

  prevImage() {
    this.selectedImageIndex = (this.selectedImageIndex - 1 + this.serviceData.length) % this.serviceData.length;
  }

  goBack() {
    this.router.navigate(['/services']);
  }

  bookService() {
    this.router.navigate(['/inquiry'], { queryParams: { service: this.serviceTitle } });
  }

  onImageError(event: any) {
    console.error('Image failed to load:', event.target.src);
  }
}
