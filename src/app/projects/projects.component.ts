import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common'


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
