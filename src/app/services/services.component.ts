import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  @Output() scrollToRRSS = new EventEmitter<void>();

  protected scrollToRRSSHandler() {
    this.scrollToRRSS.emit();
  }
}
