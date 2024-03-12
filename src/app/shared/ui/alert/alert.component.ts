import { Component, Inject, Input } from '@angular/core';

export interface IAlert {
  show: boolean;
  title?: string;
  message?: string;
}

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  @Input() alert: IAlert = { show: false };
}
