import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/home/componets/products/products.component';
import { MatMenuModule } from '@angular/material/menu';
import { FiltersComponent } from './pages/home/componets/filters/filters.component';



@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, ProductsComponent, FiltersComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
