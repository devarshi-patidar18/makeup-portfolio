import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobile = false;
  menuOpen = false;
  isScrolled = false;
  // breakpoint in px, adjust if you like
  private readonly MOBILE_BREAKPOINT = 768;
  private lastScrollPosition = 0;
  private scrollThreshold = 10;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  @HostListener('window:scroll')
  onScroll() {
    const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    // Close mobile menu on scroll
    if (this.isMobile && this.menuOpen) {
      this.menuOpen = false;
    }
    
    // Update scroll state when scrolled past threshold
    if (currentScrollPosition > this.scrollThreshold) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
    
    this.lastScrollPosition = currentScrollPosition;
  }

  private checkScreenSize() {
    const prev = this.isMobile;
    console.log('Window width:', window.innerWidth);
    this.isMobile = window.innerWidth < this.MOBILE_BREAKPOINT;

    // if we switched from mobile -> desktop, ensure menu is closed
    if (prev && !this.isMobile) {
      this.menuOpen = false;
    }
  }

  toggleMenu() {
    const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    // Only allow menu to open when scrolled to near the top (within threshold)
    if (currentScrollPosition <= this.scrollThreshold) {
      this.menuOpen = !this.menuOpen;
      console.log('Toggling menu. Current state:', this.menuOpen);
    } else {
      // If scrolled down beyond threshold, close the menu
      this.menuOpen = !this.menuOpen;
      console.log('Toggling menu. Current state:', this.menuOpen);
    }
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
