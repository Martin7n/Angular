import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-section-one-content',
  standalone: true,
  imports: [],
  templateUrl: './section-one-content.html',
  styleUrl: './section-one-content.css'
})
export class SectionOneContent {
  constructor(private router: Router) {}

  goToTestApi(): void {
    this.router.navigate(['/test-api']);
  }

}
