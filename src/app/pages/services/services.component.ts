import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent {
    services = [
        {
            id: 1,
            title: 'Bridal Makeup',
            desc: 'Create your perfect wedding day look with our expert bridal makeup services. Includes professional trials, long-lasting formulas, and customized designs.',
            icon: '💒',
            features: ['Pre-wedding trials', 'Airbrush available', 'Bridal party packages', 'Touch-up kit included']
        },
        {
            id: 2,
            title: 'Party & Event Makeup',
            desc: 'Glam up for any occasion with our party makeup services. From subtle to dramatic, we create looks that turn heads.',
            icon: '✨',
            features: ['Festive looks', 'HD makeup', 'Quick turnaround', 'All skin types']
        },
        {
            id: 3,
            title: 'Photoshoot Makeup',
            desc: 'Professional makeup for photography and videography. Optimized for cameras and lighting to ensure you look flawless.',
            icon: '📸',
            features: ['Camera-ready looks', 'Waterproof formulas', 'Outdoor experience', 'Professional lighting knowledge']
        },
        {
            id: 4,
            title: 'Hair Styling',
            desc: 'Complete hair transformation with our expert styling services. From traditional to modern, we create stunning hairstyles.',
            icon: '💇',
            features: ['Curls & waves', 'Updos & braids', 'Hair extensions', 'Styling consultation']
        },
        {
            id: 5,
            title: 'Makeup Training',
            desc: 'Learn makeup artistry from industry professionals. Comprehensive courses from beginner to advanced level with hands-on practice.',
            icon: '🎓',
            features: ['Flexible schedules', 'Professional techniques', 'Course materials included', 'Certification provided']
        },
        {
            id: 6,
            title: 'Special Effects Makeup',
            desc: 'Creative and artistic makeup for themed events, cosplay, and special projects. Push the boundaries of creativity.',
            icon: '🎨',
            features: ['Custom designs', 'Theme consultation', 'Professional products', 'Quick application']
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
}