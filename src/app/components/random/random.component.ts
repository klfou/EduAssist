import {Component} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

@Component({
  selector: 'app-random',
  imports: [SharedModule],
  templateUrl: './random.component.html',
  styleUrl: './random.component.css'
})
export class RandomComponent {

}
