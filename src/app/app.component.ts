import {Component} from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {UserComponent} from './components/user/user.component';

@Component({
  selector: 'app-root',
  imports: [SharedModule, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EduAssist';
}
