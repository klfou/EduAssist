import {Routes} from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {TimeComponent} from './components/time/time.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'user/十三班',
    pathMatch: 'full',
  },
  {
    path: 'user/:class',
    component: UserComponent
  },
  {
    path: 'time',
    component: TimeComponent
  }
];
