import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuCatalogueComponent } from './menu-catalogue/menu-catalogue.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuCatalogueComponent,
    MenuHeaderComponent,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Меню ресторана Бархан';
}
