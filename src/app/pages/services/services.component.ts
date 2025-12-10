import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataStoreService } from '../../services/data-store.service';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
    expandedServiceId: number | null = null;

    services = [
        {
            id: 1,
            title: 'Bridal Makeup',
            desc: 'Create your perfect wedding day look with our expert bridal makeup services. Includes professional trials, long-lasting formulas, and customized designs.',
            icon: '💒',
            serviceTypesKey: 'bridalServices'
        },
        {
            id: 2,
            title: 'Party & Event Makeup',
            desc: 'Glam up for any occasion with our party makeup services. From subtle to dramatic, we create looks that turn heads.',
            icon: '✨',
            serviceTypesKey: 'partyServices'
        },
        {
            id: 3,
            title: 'Pre-Wedding Photoshoot',
            desc: 'Professional makeup for pre-wedding photography sessions. Optimized for cameras and lighting to ensure you look flawless.',
            icon: '📸',
            serviceTypesKey: 'preweddingServices'
        },
        {
            id: 4,
            title: 'Photoshoot Makeup',
            desc: 'Professional makeup for photography and videography. Optimized for cameras and lighting to ensure you look flawless.',
            icon: '📸',
            serviceTypesKey: 'photoshootServices'
        }
    ];

    certifications = [
        {
            id: 1,
            name: 'Professional Makeup Artistry',
            issuer: 'International Makeup Academy',
            year: '2023',
            description: 'Advanced certification in professional makeup artistry and bridal makeup techniques.',
            icon: '🏆'
        },
        {
            id: 2,
            name: 'Airbrush Makeup Specialist',
            issuer: 'Airbrush Masters',
            year: '2023',
            description: 'Certified specialist in airbrush makeup application for flawless finishes.',
            icon: '🎯'
        },
        {
            id: 3,
            name: 'Bridal Makeup Expert',
            issuer: 'Elite Bridal Institute',
            year: '2022',
            description: 'Specialized certification in bridal makeup design and execution.',
            icon: '💍'
        },
        {
            id: 4,
            name: 'Hair Styling & Extensions',
            issuer: 'Professional Hair Academy',
            year: '2023',
            description: 'Certification in modern hair styling and extension application techniques.',
            icon: '✂️'
        },
        {
            id: 5,
            name: 'Makeup Training Instructor',
            issuer: 'Beauty Education Board',
            year: '2023',
            description: 'Certified trainer authorized to conduct makeup artistry training and certification courses.',
            icon: '👨‍🏫'
        }
    ];

    serviceTypes: { [key: string]: any[] } = {};

    serviceKeyMap: { [key: string]: string } = {
        'bridalServices': 'bridal',
        'partyServices': 'party',
        'preweddingServices': 'prewedding',
        'photoshootServices': 'photoshoot'
    };

    constructor(
        private dataStore: DataStoreService,
        private router: Router
    ) {}

    ngOnInit() {
        this.loadServiceTypes();
    }

    loadServiceTypes() {
        this.serviceTypes = {
            bridalServices: this.dataStore.bridalServices,
            partyServices: this.dataStore.partyServices,
            preweddingServices: this.dataStore.preweddingServices,
            photoshootServices: this.dataStore.photoshootServices
        };
    }

    toggleServiceExpand(serviceId: number) {
        this.expandedServiceId = this.expandedServiceId === serviceId ? null : serviceId;
    }

    getServiceTypes(serviceTypesKey: string) {
        return this.serviceTypes[serviceTypesKey] || [];
    }

    navigateToService(serviceTypesKey: string) {
        const serviceKey = this.serviceKeyMap[serviceTypesKey];
        this.router.navigate(['/service', serviceKey]);
    }
}