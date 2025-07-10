import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { TestApiComponent } from './test-api/test-api.component';
import { FooterComponent } from './footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, TestApiComponent, FooterComponent],
  template: `
    <app-navigation/>
    <app-test-api/>
    <'app-footer'/>
  `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}