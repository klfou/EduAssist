import {Component, OnDestroy, signal, WritableSignal} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {interval, Subject, takeUntil} from 'rxjs';
import {PadNumberPipe} from '../../pipes/pad-number.pipe';

@Component({
  selector: 'app-time',
  imports: [SharedModule, PadNumberPipe],
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent implements OnDestroy {
  isVisible = false;

  readonly defaultMinutes: WritableSignal<number> = signal(3)

  readonly minutes: WritableSignal<number> = signal(0)

  readonly seconds: WritableSignal<number> = signal(0)

  private readonly destroySource = new Subject<void>();
  private readonly destroy$ = this.destroySource

  countDown() {
    this.isVisible = true;
  }

  handleCancel() {
    this.isVisible = false;
  }

  handleOk() {
    this.isVisible = false;
    this.destroySource.next();
    this.minutes.set(this.defaultMinutes())
    this.seconds.set(0)
    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (this.seconds() > 0) {
          this.seconds.update(it => --it)
        } else if (this.minutes() > 0) {
          this.seconds.update(it => 59)
          this.minutes.update(it => --it)
        } else {
          this.destroySource.next();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroySource.next();
    this.destroySource.complete();
  }

  onMinus() {
    this.defaultMinutes.update(it => {
      it--
      if (it > 0)
        return it
      else
        return 0
    })
  }

  onPlus() {
    this.defaultMinutes.update(it => ++it)
  }
}
