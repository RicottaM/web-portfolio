import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { IntroComponent } from './components/intro/intro.component';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, IntroComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';
}
