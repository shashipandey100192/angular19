import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AboutComponent,ContactusComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular19';
}
