import {Component, Directive, ElementRef, ViewChild} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', './navbar.component.icons.scss'],
})
export class NavbarComponent {
  elementReference: ElementRef;
  @ViewChild('navbar') navbar: ElementRef

  @ViewChild('toggler') toggler: ElementRef
  constructor(private elRef:ElementRef) {
    this.elementReference = elRef;
  }

  username: string = 'Max Shevchuk';
  navbar_collapsed = true

  navbar_toggle() {
    if (window.innerWidth <= 768) {
      if (this.navbar_collapsed) {
        this.elementReference.nativeElement.style.height = '100%';
        this.navbar_collapsed = false;
        this.navbar.nativeElement.className = 'navbar-mobile';
        this.toggler.nativeElement.className = 'navbar-toggler close-icon';
      }
      else {
        this.elementReference.nativeElement.style.height = '10%'
        this.navbar_collapsed = true;
        this.navbar.nativeElement.className = 'navbar';
        this.toggler.nativeElement.className = 'navbar-toggler burger-icon';
      }
    }
  }
}
