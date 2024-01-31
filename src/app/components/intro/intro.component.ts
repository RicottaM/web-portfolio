import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  currentText: string = '';
  private texts: string[] = [
    'Angular Developer.',
    'Frontend Software Developer.',
    'Fullstack Software Developer.',
    'Computer Science Student.',
  ];
  private textIndex: number = 0;
  private typingInterval: any;

  constructor() {
    this.printNewText();
  }

  printNewText(): void {
    const fullText: string = this.texts[this.textIndex];
    let currentIndex = 0;

    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }

    this.typingInterval = setInterval(() => {
      this.currentText = fullText.substring(0, currentIndex + 1);
      currentIndex++;

      if (currentIndex === fullText.length) {
        clearInterval(this.typingInterval);
        this.moveToNextText();
      }
    }, 75);
  }

  moveToNextText(): void {
    this.textIndex = (this.textIndex + 1) % this.texts.length;
    setTimeout(() => this.printNewText(), 3000);
  }
}
