import { Component } from '@angular/core';


@Component({
  selector: 'app-inquiry',
  standalone: true,
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent {
  phone = '';
  name = '';
  message = '';
  saved = false;


  submit() {
    // basic validation for phone
    const cleaned = this.phone.replace(/\s+/g, '');
    if (!/^[0-9+\-()]{7,20}$/.test(cleaned)) {
      alert('Please enter a valid contact number');
      return;
    }
  }
}


// save to localStorage (placeholder - later integrate EmailJ