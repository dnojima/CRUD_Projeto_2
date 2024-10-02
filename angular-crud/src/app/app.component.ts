import { Component } from '@angular/core';
import { ClientListComponent } from './components/client-list/client-list.component';

@Component({
  selector: 'app-root',
  template: `<app-client-list></app-client-list>`,
  standalone: true,
  imports: [ClientListComponent],
})
export class AppComponent {}
