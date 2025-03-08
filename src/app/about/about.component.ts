import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RrssComponent } from '@app/rrss/rrss.component';

@Component({
  selector: 'app-about',
  imports: [RrssComponent],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
