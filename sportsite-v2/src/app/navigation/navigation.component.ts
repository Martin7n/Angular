// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-navigation',
//   standalone: true,
//   imports: [],
//   templateUrl: './navigation.component.html',
//   styleUrl: './navigation.component.css'
// })
// export class NavigationComponent {

// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']  // ✅ FIXED
})



  export class NavigationComponent {
  constructor(private router: Router) {}

  goToTestApi(): void {
    this.router.navigate(['/test-api']);
  }
}