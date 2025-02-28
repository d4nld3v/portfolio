import { Component } from '@angular/core';
import { MenuComponent } from '@app/menu/menu.component';
import { ExperienceComponent } from '@app/experience/experience.component';
import { ServicesComponent } from './services/services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent, ExperienceComponent, ServicesComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'portfolio';
}
