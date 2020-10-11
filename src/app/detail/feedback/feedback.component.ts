import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-course-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event']) onScrollEvent() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.getElementById("header").style.display = "block";
    } else
     {
      document.getElementById("header").style.display = "none";
    }
  }

}
