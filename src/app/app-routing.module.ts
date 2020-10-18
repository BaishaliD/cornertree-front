import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobPostingComponent } from './job-posting/job-posting.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { JobSeekerComponent } from './job-seeker/job-seeker.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'job-posting', component: JobPostingComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'recruiter', component: RecruiterComponent},
  {path: 'job-seeker', component: JobSeekerComponent},
  //{path: 'logout', redirectTo: '/add-user', pathMatch: 'full'},
  {path: 'home', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
    HttpClientModule
  ]
})
export class AppRoutingModule { }
