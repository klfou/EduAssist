import {Component, signal, WritableSignal} from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {NgClass} from '@angular/common';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [SharedModule, RouterOutlet, RouterLink, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [trigger('routeAnimations', [transition('* <=> *', [style({opacity: 0}), animate('500ms ease-in', style({opacity: 1}))])])],
})
export class AppComponent {
  title = 'EduAssist';

  classes: string[] = [
    "十三班",
    "十四班",
    "十五班",
    "十六班"
  ]

  url: WritableSignal<string> = signal("/user/十三班")

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url !== "/")
          this.url.set(decodeURIComponent(event.url));
      }
    })
  }
}
