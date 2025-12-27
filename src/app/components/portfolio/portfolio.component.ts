

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataStoreService } from '../../services/data-store.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  gallery: Array<any> = [];
  filter: string = 'all';
  types:any [] = [{key: 'all', value: 'All'}, {key:'bridal', value: 'Bridal'}, {key:'party', value: 'Party'}, {key:'prewedding', value: 'Pre-Wedding'}, {key:'photoshoot', value: 'Photoshoot'}, {key:'hairstyles', value: 'Hairstyles'}];
  modalOpen: boolean = false;
  modalImage: any = null;

  constructor(private dataStore: DataStoreService) {}

  ngOnInit(): void {
    this.dataStore.isPageLoading = true;
    window.scroll(0,0);
    // if(this.dataStore.selectedServiceType == )
    this.filter = this.dataStore.selectedServiceType || 'all';
    this.buildGallery();
  }

  buildGallery() {
    const mapWithType = (arr: any[], type: string) => arr.map(i => ({...i, type}));
    this.gallery = [
      ...mapWithType(this.dataStore.services['bridal'] || [], 'bridal'),
      ...mapWithType(this.dataStore.services['party'] || [], 'party'),
      ...mapWithType(this.dataStore.services['prewedding'] || [], 'prewedding'),
      ...mapWithType(this.dataStore.services['photoshoot'] || [], 'photoshoot'),
      ...mapWithType(this.dataStore.services['hairstyles'] || [], 'hairstyles')
    ];
    if (this.gallery.length != 0) {
      this.dataStore.isPageLoading = false;
    }
  }

  filtered() {
    if (this.filter === 'all') return this.gallery;
    return this.gallery.filter(g => g.type === this.filter);
  }

  openModal(item: any) {
    this.modalImage = item;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.modalImage = null;
  }
}
