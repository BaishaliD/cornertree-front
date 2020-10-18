import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {
  
  locations = ['Delhi','Mumbai','Bangalore','Kolkata','Chennai','Gurgaon'];
  functions = ['Front end','Back end','Full stack','Web developement','Android development'];

  constructor() { }

  ngOnInit(): void {
  }

}
