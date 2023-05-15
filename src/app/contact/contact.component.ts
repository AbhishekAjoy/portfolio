import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {

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
