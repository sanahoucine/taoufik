import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import HomeComponent from './Home/home.component';
import HeaderComponent from './shared/components/header/header.component';
import MobtadaComponent from './mobtada/mobtada.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HomeComponent,HeaderComponent,MobtadaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DemoApplicationSana';
}
