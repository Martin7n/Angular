import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainContentComponent } from '../main-content/main-content';


@Component({
  selector: 'app-section-one-content',
  standalone: true,
  imports: [MainContentComponent  ],
  templateUrl: './section-one-content.html',
  styleUrl: './section-one-content.css'
})
export class SectionOneContent {
  constructor(private router: Router) {}

  goToTestApi(): void {
    this.router.navigate(['/workouts']);
  }

}
