import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  imports: [CommonModule]
})
export class TestApiComponent implements OnInit {
  data: any;
  loading = true;
  error: string | null = null;

  constructor(private myDataService: MyDataService) {}

  ngOnInit(): void {
    this.myDataService.getData().subscribe({
      next: (response) => {
        this.data = response;
        console.log(this.data)
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load data';
        this.loading = false;
        console.error(err);
      }
    });
  }
}
