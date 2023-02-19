import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  style = {
    font_size: '24px',
  };

  classes = ['green_title', 'small_title'];
}
