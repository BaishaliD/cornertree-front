import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  filter,
} from 'rxjs/operators';

type State = { value: string };

var states: State[] = [];

var states: State[] = [
  {value: "Kolkata"},
  {value: "Mumbai"},
  {value: "Chennai"},
  {value: "Bangalore"},
  {value: "Delhi"},
  {value: "Front end"},
  {value: "Back end"},
  {value: "Full stack"},
  {value: "Javascript"},
  {value: "NodeJS"},
  {value: "REST API"},
  {value: "Web development"},
  {value: "Mongo DB"},
  {value: "MySQL"},
  {value: "React"},
  {value: "Angular"}
];

var jobTags = [
  {
    id: 0,
    tags: ["Mumbai", "Mongo DB", "NodeJS", "Back end" ]
  },
  {
    id: 1,
    tags: ["Mumbai", "MySQL", "Angular", "Full stack" ]
  }
];

var allJobs = [
  {
    id: 0,
    jobRole:"Backend developer",
    function:"Create backend of a system",
    coreSkills: ["Mongo DB", "Node JS","React"],
    softSkills: ["Communicative", "Independent","Fast learner"],
    company:"Company One",
    location:"Mumbai",
    pin:"400029",
    compensation:"8 LPA",
    jd:"Developing backend software solutions by studying information needs; c..."

  }
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public model: State;
  showJobs: Boolean = true;
  joblist = [];
  
  

  formatter = (state: State) => state.value;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      filter((term) => term.length >= 2),
      map((term) =>
        states
          .filter((state) => new RegExp(term, 'mi').test(state.value))
          .slice(0, 10)
      )
    );

  constructor(public http: HttpClient) {}

  ngOnInit() {
    console.log('home page loaded');
  }

  async searchJob(){
    console.log(this.model);

    jobTags.forEach(item => {
      if (item.tags.includes(this.model.value)){
        this.joblist.push(allJobs[item.id]);
      }
    });

    console.log(this.joblist);
  }

}
