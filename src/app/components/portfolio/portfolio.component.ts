

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
  filter: string = 'All';
  types: string[] = ['All', 'Bridal', 'Party', 'Pre-Wedding', 'Photoshoot'];
  modalOpen: boolean = false;
  modalImage: any = null;

  constructor(private dataStore: DataStoreService) {}

  ngOnInit(): void {
    this.buildGallery();
  }

  buildGallery() {
    const mapWithType = (arr: any[], type: string) => arr.map(i => ({...i, type}));
    this.gallery = [
      ...mapWithType(this.dataStore.services['bridal'] || [], 'Bridal'),
      ...mapWithType(this.dataStore.services['party'] || [], 'Party'),
      ...mapWithType(this.dataStore.services['prewedding'] || [], 'Pre-Wedding'),
      ...mapWithType(this.dataStore.services['photoshoot'] || [], 'Photoshoot')
    ];
  }

  filtered() {
    if (this.filter === 'All') return this.gallery;
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
