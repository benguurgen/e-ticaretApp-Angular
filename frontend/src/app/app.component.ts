import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSpinnerModule],
  template: `
  <router-outlet></router-outlet>
  <ngx-spinner bdColor = "rgba(240,98,146,0.2)" size = "medium" color = "#f06292" type = "ball-spin-clockwise" [fullScreen] = "true"><p style="color: #880E4F	" > Lütfen Bekleyiniz.. </p></ngx-spinner>`
})
export class AppComponent {
  
}
