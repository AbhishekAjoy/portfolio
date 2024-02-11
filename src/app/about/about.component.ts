import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: true,
    imports: [MatStepperModule]
})
export class AboutComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}
  isLinear:boolean = false;

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
