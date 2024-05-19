import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-menu-catalogue',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './menu-catalogue.component.html',
  styleUrls: ['./menu-catalogue.component.scss'], // Also correct 'styleUrl' to 'styleUrls'
})
export class MenuCatalogueComponent implements OnInit {
  cards: any[] = []; // Define the cards array to store the data

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get<any[]>('assets/content/cards.json').subscribe({
      next: (data) => {
        this.cards = data; // Assign the fetched data to the cards array
      },
      error: (error) => {
        console.error('Error loading card data:', error);
      },
    });
  }
}
