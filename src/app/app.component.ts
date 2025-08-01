import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import BreedsComponent from './pages/breeds/breeds.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-jr-angular';
}
