import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cornertree Jobs';

  enlarge(id){
    document.getElementById(id).style.transform="scale(1.1)";
  }

  normalize(id){
    document.getElementById(id).style.transform="scale(1.0)";
  }
}
