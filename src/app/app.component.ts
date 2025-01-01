import {Component} from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [SharedModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EduAssist';

  classes: string[] = [
    "十三班",
    "十四班",
    "十五班",
    "十六班"
  ]
}
