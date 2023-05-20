import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'mnb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe]
})
export class AppComponent implements OnInit {
  title = 'MoneyBlinks';

  currentDate: Date;


  constructor(translate: TranslateService) {
    // ts-ignore
    const lang = navigator.language || 'en';
    const myLang = lang.substr(0, 2);
    // const myLang = 'en';
    const languagesArray = ['en', 'es'];
    translate.addLangs(languagesArray);
    if (languagesArray.includes(myLang)) {
      translate.setDefaultLang(myLang);
      translate.use(myLang);
    } else {
      translate.setDefaultLang('en');
      translate.use('en');
    }
  }

  ngOnInit(): void {
    this.currentDate = new Date();
  }


}
