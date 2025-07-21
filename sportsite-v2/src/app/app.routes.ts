// import { Routes } from '@angular/router';

// export const routes: Routes = [];


import { Routes } from '@angular/router';
import { SectionOneContent } from './section-one-content/section-one-content';
import { WorkoutApiComponent } from './workout-api/workout-api.component';
import { About } from './about/about';
import { RegisterComponent } from './register/register';
import { LoginComponent } from './login-component/login-component';

export const routes: Routes = [
  { path: '', component: SectionOneContent },   // default route
  { path: 'workouts', component: WorkoutApiComponent }, // workout api route
  { path: 'about', component: About }, 
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
    // { path: 'login', component: RegisterComponent},

  
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
