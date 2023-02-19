import { Component } from '@angular/core';
import { User } from 'src/app/User';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-for-render',
  templateUrl: './for-render.component.html',
  styleUrls: ['./for-render.component.scss']
})

export class ForRenderComponent {
  
  constructor(private listService: ListService){
    this.getUsers()
  }

  users: User[] = [];

  userDetails = '';

  showAge(user: User){
    this.userDetails = `A idade dessa pessoa é: ${user.age}`
  };

  deleteUser(user: User){
    this.users = this.users.filter((us) => us.name !== user.name);
    this.listService.remove(user.id).subscribe()
  };

  getUsers(): void {
    this.listService. getAll().subscribe((users) => (this.users = users));
  }
}
