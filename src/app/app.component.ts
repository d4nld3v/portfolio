import { Component } from '@angular/core';
import { MenuComponent } from '@app/menu/menu.component';
import { ExperienceComponent } from '@app/experience/experience.component';
import { ServicesComponent } from '@app/services/services.component';
import { ContactComponent } from '@app/contact/contact.component';
import { AboutComponent } from '@app/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MenuComponent,
    ExperienceComponent,
    ServicesComponent,
    ContactComponent,
    AboutComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'portfolio';
}
