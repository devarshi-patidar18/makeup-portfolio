import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStoreService } from '../../services/data-store.service';
import { environment } from '../../../environments/environment';

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

  constructor(private route: ActivatedRoute, public dataStore: DataStoreService,
    private router: Router
  ) { }

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

    // Resolve environment keys (support a few common naming patterns)
    const SERVICE_ID = environment.EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = environment.EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = environment.EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID) {
      alert('EmailJS service/template IDs are not configured in the environment.');
      return;
    }

    try {
      // Load EmailJS script if not present
      await this.ensureEmailJsLoaded();

      // init with public key (safe to call multiple times)
      if (PUBLIC_KEY) {
        try { win.emailjs.init(PUBLIC_KEY); } catch (e) { /* swallow init errors */ }
      }

      await win.emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      this.showConfirmation = true;
      this.clearForm();
    } catch (err) {
      console.error('EmailJS send error', err);
      alert('Failed to send inquiry. Please try again later.');
    }
  }

  private ensureEmailJsLoaded(): Promise<void> {
    const win: any = window as any;
    if (win.emailjs && win.emailjs.send) return Promise.resolve();

    return new Promise((resolve, reject) => {
      const existing = document.querySelector('script[data-emailjs]');
      if (existing) {
        (existing as HTMLScriptElement).addEventListener('load', () => resolve());
        (existing as HTMLScriptElement).addEventListener('error', () => reject(new Error('EmailJS script failed to load')));
        return;
      }

      const script = document.createElement('script');
      script.setAttribute('data-emailjs', 'true');
      script.src = 'https://cdn.emailjs.com/dist/email.min.js';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('EmailJS script failed to load'));
      document.head.appendChild(script);
    });
  }

  clearForm() {
    this.name = '';
    this.phone = '';
    this.email = '';
    this.message = '';
    this.makeupType = '';
  }

  closeConfirmation() {
    this.dataStore.isPageLoading = false;
    this.router.navigate(["/"]);
  }

  sendInquiry() {
    this.dataStore.isPageLoading = true;
    this.submit();
    this.makeupType = '';
  }

  
}