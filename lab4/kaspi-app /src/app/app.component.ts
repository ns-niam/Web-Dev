import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainComponent],
  template: `
    <app-header />
    <app-main />
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {}
