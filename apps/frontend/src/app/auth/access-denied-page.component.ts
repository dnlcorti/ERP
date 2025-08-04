import { Component } from '@angular/core';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-access-denied',
  standalone: true,
  imports: [MessageModule],
  template: `<p-message severity="error" text="Access Denied" i18n></p-message>`
})
export class AccessDeniedPageComponent {}
