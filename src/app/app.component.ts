import { Component, OnInit, OnDestroy } from '@angular/core';
//import { Observable } from 'rxjs';
//import { interval } from 'rxjs/observable/interval';
import { timer, interval } from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sagar Agrawal';
  delay = 3000; // every 3 sec
  jobTitles = ['Web Developer', 'Frontend Development', 'API Integration'];
  counter = 0;
  jobTitle = this.jobTitles[0];
  twitterUrl = 'https://twitter.com/sag_dev';
  linkedInUrl = 'https://www.linkedin.com/in/sagarag05/';
  gitUrl = 'https://github.com/sagar-ag05';
  stackOverFlowUrl = 'https://stackoverflow.com/users/3430283/sagar-agrawal?tab=profile';

  constructor() {
  }

  ngOnInit () {
    const source = interval(this.delay);
    source.subscribe(val => {
      this.counter = this.counter % 3
      this.jobTitle = this.jobTitles[this.counter];
      this.counter++;
    });
  }

  twitterClick() {
    window.open(this.twitterUrl, "_blank");
  }

  linkedInClick() {
    window.open(this.linkedInUrl, "_blank");
  }

  gitClick() {
    window.open(this.gitUrl, "_blank");
  }

  stackOverFlowClick() {
    window.open(this.stackOverFlowUrl, "_blank");
  }

}
