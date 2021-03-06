import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { UserProgressComponent } from './components/user-progress/user-progress.component';
import { ChallengesModule } from 'src/app/shared/modules/challenges/challenges.module';



@NgModule({
  declarations: [
    UserPageComponent,
    UserInfoComponent,
    UserProgressComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ChallengesModule
  ]
})
export class UserModule { }
