import {Component} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

export interface User {
  name: string;
}

@Component({
  selector: 'app-user',
  imports: [SharedModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: User[] = [];

  constructor() {
    for (let i = 0; i < 60; i++) {
      this.users.push({
        name: "感染力",
      })
    }
  }
}
