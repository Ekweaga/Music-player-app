import { Component, OnInit } from '@angular/core';
import { BoommackService } from '../boommack.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
newreleases :any;
  constructor(private boom:BoommackService) { }

  ngOnInit(): void {
    this.boom.getsongs().subscribe((data:any)=>{
      console.log(data.albums.items)
      this.newreleases = data.albums.items
    })
  }

}
