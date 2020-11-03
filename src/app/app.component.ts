import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { RequestApiService } from './request-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'Exemple HTTP';
  public members;

  constructor(private requestApiService: RequestApiService) {

  }

  ngOnInit() {
    this.requestApiService.request("wp-json/mk/members").subscribe((members) => {
      this.members = members;
    });
  }
}
