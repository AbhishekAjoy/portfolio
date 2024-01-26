import { Component, ElementRef, ViewChild } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [NavbarComponent, AboutComponent, ContactComponent,NgOptimizedImage]
})
export class AppComponent {
  title = 'portfolio';

  constructor(private el: ElementRef) {}

  @ViewChild('animate') text!: ElementRef;
  
  ngAfterViewInit(){
    const threshold = 0.6;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add('fade-in');
        }
        else{
          entry.target.classList.remove('fade-in');
        }
      });
    }, {threshold});

    observer.observe(this.text.nativeElement);
  }
}
