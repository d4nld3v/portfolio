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

  @ViewChild('contactSection', { static: true, read: ElementRef })
  contacSection!: ElementRef;

  protected scrollToEmail(): void {
    if (this.contacSection) {
      this.contacSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
