import { Component } from '@angular/core';
import { MenuComponent } from '@app/menu/menu.component';
import { ExperienceComponent } from '@app/experience/experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent, ExperienceComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'portfolio';
}
