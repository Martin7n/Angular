// import { Component } from '@angular/core';
import { Component } from '@angular/core';
import { User } from './model/user.model';
import { Company } from './model/company.model';


// @Component({
//   selector: 'app-test-component',
//   imports: [],
//   templateUrl: './test-component.component.html',
//   styleUrl: './test-component.component.css'
// })
// export class TestComponentComponent {

// }


@Component({
  selector: 'app-nav',
  templateUrl: 'test-component.component.html',
  styles: [
 
  ],
})
export class NavComponent {
  titleVar = 'navigation var Works';
  classVar = "new";
  idVar = 'id';
  users: User[] = [{
    id: 1,
    name: "A1",
    age: 22,
        company: <Company> {
        name: "Zssz"
    }
  }, 
  {
    id: 2,
    name: "A2",
    age: 23,
    company: <Company> {
      name: "Vvv"
    }
  }]



  constructor() {
  console.log("init")
}


onGreet(name: string){
    console.log(`Hello ${name}` )


}

};

