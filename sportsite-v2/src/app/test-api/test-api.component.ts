import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-test-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})
export class TestApiComponent implements OnInit {
  data: any;
  loading = true;
  error = '';

  constructor(private myDataService: MyDataService) {}

  ngOnInit(): void {
    this.myDataService.getData().subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error loading data';
        this.loading = false;
      }
    });
  }
}
