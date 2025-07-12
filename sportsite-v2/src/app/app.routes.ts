// import { Routes } from '@angular/router';

// export const routes: Routes = [];


import { Routes } from '@angular/router';
import { SectionOneContent } from './section-one-content/section-one-content';
import { TestApiComponent } from './test-api/test-api.component';

export const routes: Routes = [
  { path: '', component: SectionOneContent },   // default route
  { path: 'test-api', component: TestApiComponent },      // test api route
];
