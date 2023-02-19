import { Component } from '@angular/core';

@Component({
  selector: 'app-emit',
  templateUrl: './emit.component.html',
  styleUrls: ['./emit.component.scss']
})
export class EmitComponent {
  myNumber = 0;
  onChangeNumber(): void {
    this.myNumber = Math.floor(Math.random() * 100000)
  }
}
