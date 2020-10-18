import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-seeker',
  templateUrl: './job-seeker.component.html',
  styleUrls: ['./job-seeker.component.css']
})
export class JobSeekerComponent implements OnInit {

  locations = ['Delhi','Mumbai','Bangalore','Kolkata','Chennai','Gurgaon'];
  functions = ['Front end','Back end','Full stack','Web developement','Android development'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
