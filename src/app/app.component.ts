import { Component, ViewChild, ElementRef } from '@angular/core';
import { MenuComponent } from '@app/menu/menu.component';
import { ExperienceComponent } from '@app/experience/experience.component';
import { ServicesComponent } from '@app/services/services.component';
import { ContactComponent } from '@app/contact/contact.component';
import { AboutComponent } from '@app/about/about.component';
import { FloatingInfoComponent } from '@app/floating-info/floating-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MenuComponent,
    ExperienceComponent,
    ServicesComponent,
    ContactComponent,
    AboutComponent,
    FloatingInfoComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'portfolio';

  @ViewChild('rrss') rrss!: ElementRef;

  protected scrollToRRSS() {
    this.rrss.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
