import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'mnb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/js/home.js';
    script.async = false;
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
  }

}
