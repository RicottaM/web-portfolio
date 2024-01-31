import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,
  faDumbbell,
  faBeer,
  faCode,
  faMusic,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  dumbbellIcon: IconDefinition = faDumbbell;
  beerIcon: IconDefinition = faBeer;
  codeIcon: IconDefinition = faCode;
  musicIcon: IconDefinition = faMusic;
}
