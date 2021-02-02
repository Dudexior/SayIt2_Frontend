import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }

  deleteAvatar() {
    console.warn('Not Implemented');
  }

  updateAvatar() {
    console.warn('Not Implemented');
  }
}