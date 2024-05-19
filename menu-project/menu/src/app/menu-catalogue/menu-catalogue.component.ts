import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu-catalogue',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './menu-catalogue.component.html',
  styleUrls: ['./menu-catalogue.component.scss'],
})
export class MenuCatalogueComponent implements OnInit {
  cards: any[] = [];
  selectedCategory = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get<any[]>('assets/content/cards.json').subscribe({
      next: (data) => {
        this.cards = data;
      },
      error: (error) => {
        console.error('Error loading card data:', error);
      },
    });
  }

  get filteredCards() {
    if (!this.selectedCategory || this.selectedCategory === 'Все') {
      return this.cards;
    }
    return this.cards.filter((card) => card.type === this.selectedCategory);
  }
}
