import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { SecondNew } from './second-new/second-new';
import { TestApiComponent } from './test-api/test-api.component';
import { FooterComponent } from './footer/footer.component';
import { MainContent } from './main-content/main-content';
import { SectionOneContent } from './section-one-content/section-one-content';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
           NavigationComponent, 
           FooterComponent, 
          MainContent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('sportsite-v2');
}
