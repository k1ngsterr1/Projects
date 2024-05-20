import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuCatalogueComponent } from './menu-catalogue/menu-catalogue.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuCatalogueComponent,
    MenuHeaderComponent,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Меню ресторана Бархан';

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    // Initial translation configuration is done in main.ts
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
