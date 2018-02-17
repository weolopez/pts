import { Component } from '@angular/core';
import { MlsSiteService } from './mls-site.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public mls: MlsSiteService) {

  }
}
