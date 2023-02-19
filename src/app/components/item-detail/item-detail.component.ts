import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/services/list.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})

export class ItemDetailComponent {
  user?: User;
  
  constructor(private listService: ListService, private route: ActivatedRoute){
    this.getUserById()
  }

  getUserById()  {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.userById(id).subscribe((u) => this.user = u )
  }
  
}
