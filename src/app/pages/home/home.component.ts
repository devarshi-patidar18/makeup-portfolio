import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { DataStoreService } from '../../services/data-store.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [RouterLink, CommonModule]
})
export class HomeComponent implements OnInit, OnDestroy {
    currentImageIndex: number = 0;
    bestImages: any[] = [];
    currentBackgroundImage: string = '';
    currentImageName: string = '';
    carouselInterval: any;

    constructor(private dataStore: DataStoreService) {}

    ngOnInit() {
        this.loadBestImages();
        this.setInitialImage();
        this.startImageCarousel();
    }

    loadBestImages() {
        // Collect all images with 'best' preference from all services
        const allBestImages = [
            ...this.dataStore.bridalServices.filter(s => s.preference === 'best'),
            ...this.dataStore.partyServices.filter(s => s.preference === 'best'),
            ...this.dataStore.preweddingServices.filter(s => s.preference === 'best'),
            ...this.dataStore.photoshootServices.filter(s => s.preference === 'best')
        ];
        this.bestImages = allBestImages.length > 0 ? allBestImages : this.dataStore.bridalServices;
        console.log('Best Images loaded:', this.bestImages);
    }

    setInitialImage() {
        if (this.bestImages.length > 0) {
            console.log('Setting initial image:', this.bestImages[0].ImageUrl);
            this.setCurrentImage(this.bestImages[0]);
        } else {
            console.log('No best images found!');
        }
    }

    startImageCarousel() {
        this.carouselInterval = setInterval(() => {
            this.changeImage();
        }, 5000); // Change image every 2 seconds
    }

    changeImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.bestImages.length;
        console.log('Changing to image:', this.bestImages[this.currentImageIndex].ImageUrl);
        this.setCurrentImage(this.bestImages[this.currentImageIndex]);
    }

    setCurrentImage(imageObj: any) {
        if (!imageObj) return;
        const imageUrl = imageObj.ImageUrl || imageObj.imageUrl || imageObj.url || '';
        this.currentBackgroundImage = imageUrl;
        this.currentImageName = imageObj.name || imageObj.title || '';
        console.log('Updated currentBackgroundImage to:', this.currentBackgroundImage, 'name:', this.currentImageName);
    }

    ngOnDestroy() {
        if (this.carouselInterval) {
            clearInterval(this.carouselInterval);
        }
    }
}