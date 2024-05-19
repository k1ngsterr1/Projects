import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuCatalogueComponent } from './menu-catalogue/menu-catalogue.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuCatalogueComponent,
    MenuHeaderComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Меню ресторана Бархан';
}
