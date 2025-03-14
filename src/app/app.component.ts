import { Component } from '@angular/core';
import { VariablesComponent } from './components/variables/variables.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink, VariablesComponent, DataBindingComponent, DirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
