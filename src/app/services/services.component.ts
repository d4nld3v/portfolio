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
  @Output() scrollToEmail = new EventEmitter<void>();

  protected scrollToEmailHandler() {
    this.scrollToEmail.emit();
  }
}
