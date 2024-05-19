import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCatalogueComponent } from './menu-catalogue.component';

describe('MenuCatalogueComponent', () => {
  let component: MenuCatalogueComponent;
  let fixture: ComponentFixture<MenuCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCatalogueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
