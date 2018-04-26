import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
 
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 
  random;
 
  constructor(private router:Router) {
    console.log("click route again");
    this.router.events.subscribe(event => {
      if(!(event instanceof NavigationEnd)) { return; }
      this.random = Math.random();
    });
   }
 
  ngOnInit() {

 
  }
 
}