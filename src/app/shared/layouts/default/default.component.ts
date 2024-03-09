import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [RouterModule, CommonModule, FooterComponent],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent {
  years: string = `${(new Date()).getFullYear()}`;
}
