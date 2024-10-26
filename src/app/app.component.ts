import { Component } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title: string = 'my-website';
  message?: string;

  constructor(private backendService: BackendService) {}

  getBackendMessage() {
    this.backendService.getMessage().subscribe({
      next: message => this.message = message,
      error: error => alert(error.message)
    })
  }
}
