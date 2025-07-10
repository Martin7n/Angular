import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  TestComponent } from './test-component/test-component.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { TestApiComponent } from './test-api/test-api.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponent, NavigationComponent, FooterComponent, TestApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'angFirst';
}




