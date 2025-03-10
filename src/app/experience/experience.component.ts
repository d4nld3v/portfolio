import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InprogressProjectComponent } from '@app/inprogress-project/inprogress-project.component';
@Component({
  selector: 'app-experience',
  imports: [InprogressProjectComponent],
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {}
