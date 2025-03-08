import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RrssComponent } from '../rrss/rrss.component';

@Component({
  selector: 'app-floating-info',
  imports: [RrssComponent],
  templateUrl: './floating-info.component.html',
  styleUrl: './floating-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingInfoComponent {}
