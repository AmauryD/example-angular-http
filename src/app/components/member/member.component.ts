import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  @Input() member;

  show = false;

  constructor() { }

  onMemberClick() {
    this.show = !this.show;
  }

  ngOnInit(): void {
    
  }
}
