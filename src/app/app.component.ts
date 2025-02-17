import { Component } from '@angular/core';
import { MenuComponent } from '@app/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'portfolio';
}
