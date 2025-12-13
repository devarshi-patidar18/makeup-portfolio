import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataStoreService } from '../../services/data-store.service';

// Replace these with your EmailJS values
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

@Component({
  selector: 'app-inquiry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {
  phone = '';
  name = '';
  email = '';
  message = '';
  makeupType = '';
  showConfirmation = false;

  constructor(private route: ActivatedRoute, public dataStore: DataStoreService) {}

  ngOnInit() {
    // preselect makeup type if provided as query param (from Book button)
    this.route.queryParams.subscribe(params => {
      if (params['service']) this.makeupType = params['service'];
    });
    this.makeupType = this.dataStore.selectedServiceType;
  }

  validatePhone(): boolean {
    const cleaned = this.phone.replace(/\s+/g, '');
    return /^[0-9+\-()]{7,20}$/.test(cleaned);
  }

  async submit() {
    if (!this.name || !this.name.trim()) {
      alert('Name is required');
      return;
    }
    if (!this.validatePhone()) {
      alert('Please enter a valid contact number');
      return;
    }

    const templateParams = {
      name: this.name,
      phone: this.phone,
      email: this.email || 'Not provided',
      makeupType: this.makeupType || 'Not selected',
      message: this.message || ''
    };

    const win: any = window as any;
    if (!win.emailjs || !win.emailjs.send) {
      alert('EmailJS is not loaded. Make sure you added the EmailJS script and set keys.');
      return;
    }

    try {
      // init with public key (safe to call multiple times)
      if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        win.emailjs.init(EMAILJS_PUBLIC_KEY);
      }

      await win.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      this.showConfirmation = true;
      this.clearForm();
    } catch (err) {
      console.error('EmailJS send error', err);
      alert('Failed to send inquiry. Please try again later.');
    }
  }

  clearForm() {
    this.name = '';
    this.phone = '';
    this.email = '';
    this.message = '';
    this.makeupType = '';
  }

  closeConfirmation() {
    this.showConfirmation = false;
  }

  sendInquiry(){
    this.submit();
    this.makeupType = '';
  }
}