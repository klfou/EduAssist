import {Component} from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {UserComponent} from './components/user/user.component';
import {NzModalRef, NzModalService} from 'ng-zorro-antd/modal';
import {RandomComponent} from './components/random/random.component';
import {TimeComponent} from './components/time/time.component';

@Component({
  selector: 'app-root',
  imports: [SharedModule, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EduAssist';

  classes: string[] = [
    "五班",
    "十班",
    "七班",
    "八班",
    "九班",
  ]

  constructor(
    private modalService: NzModalService,
  ) {
  }

  random() {
    const modal: NzModalRef = this.modalService.create({
      nzTitle: '随机抽选',
      nzContent: RandomComponent,

    })
  }

  time() {
    const modal: NzModalRef = this.modalService.create({
      nzTitle: '倒计时',
      nzContent: TimeComponent,
    })
  }
}
