import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user_name: string = 'Karol';

  user_data = {
    email: 'karoldibarro@gmail.com',
    role: 'gf'
  };

  title: string = 'mercury_drops';
}
